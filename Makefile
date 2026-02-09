# Makefile для управления Docker контейнером СочиНяшка Landing Page
# Поддерживает Windows (PowerShell), Linux и macOS

.PHONY: help docker-build docker-run docker-stop docker-restart docker-logs docker-shell docker-clean docker-deploy docker-update

# Параметры
IMAGE_NAME := socinyashka-landing
CONTAINER_NAME := socinyashka-landing
PORT := 80

# Цвета для вывода (работает в Linux/macOS)
ifdef OS
	# Windows
	COLOR_RESET := 
	COLOR_GREEN := 
	COLOR_YELLOW := 
	COLOR_BLUE := 
else
	# Linux/macOS
	COLOR_RESET := \033[0m
	COLOR_GREEN := \033[32m
	COLOR_YELLOW := \033[33m
	COLOR_BLUE := \033[34m
endif

## help: Показать это сообщение помощи
help:
	@echo "$(COLOR_BLUE)Доступные команды для СочиНяшка Landing Page:$(COLOR_RESET)"
	@echo ""
	@echo "$(COLOR_GREEN)  make docker-build$(COLOR_RESET)    - Собрать Docker образ"
	@echo "$(COLOR_GREEN)  make docker-run$(COLOR_RESET)      - Запустить контейнер"
	@echo "$(COLOR_GREEN)  make docker-stop$(COLOR_RESET)     - Остановить контейнер"
	@echo "$(COLOR_GREEN)  make docker-restart$(COLOR_RESET)  - Перезапустить контейнер"
	@echo "$(COLOR_GREEN)  make docker-logs$(COLOR_RESET)     - Показать логи контейнера"
	@echo "$(COLOR_GREEN)  make docker-shell$(COLOR_RESET)    - Войти в контейнер (shell)"
	@echo "$(COLOR_GREEN)  make docker-clean$(COLOR_RESET)    - Удалить контейнер и образ"
	@echo ""
	@echo "$(COLOR_YELLOW)Деплой:$(COLOR_RESET)"
	@echo "$(COLOR_GREEN)  make docker-deploy$(COLOR_RESET)   - Полный деплой (stop + build + run)"
	@echo "$(COLOR_GREEN)  make docker-update$(COLOR_RESET)   - Обновление из Git (pull + deploy)"
	@echo ""
	@echo "$(COLOR_BLUE)Примеры:$(COLOR_RESET)"
	@echo "  make docker-deploy    # Первый запуск"
	@echo "  make docker-update    # Обновить и перезапустить"
	@echo "  make docker-logs      # Посмотреть логи"

## docker-build: Собрать Docker образ
docker-build:
	@echo "$(COLOR_BLUE)🔨 Сборка Docker образа...$(COLOR_RESET)"
	docker build -t $(IMAGE_NAME) .
	@echo "$(COLOR_GREEN)✅ Образ $(IMAGE_NAME) собран успешно!$(COLOR_RESET)"

## docker-run: Запустить контейнер
docker-run:
	@echo "$(COLOR_BLUE)🚀 Запуск контейнера...$(COLOR_RESET)"
	docker run -d \
		--name $(CONTAINER_NAME) \
		-p $(PORT):80 \
		--restart unless-stopped \
		$(IMAGE_NAME)
	@echo "$(COLOR_GREEN)✅ Контейнер запущен!$(COLOR_RESET)"
	@echo "$(COLOR_YELLOW)🌐 Сайт доступен на: http://localhost:$(PORT)$(COLOR_RESET)"

## docker-stop: Остановить и удалить контейнер
docker-stop:
	@echo "$(COLOR_BLUE)🛑 Остановка контейнера...$(COLOR_RESET)"
	-docker stop $(CONTAINER_NAME) 2>/dev/null || true
	-docker rm $(CONTAINER_NAME) 2>/dev/null || true
	@echo "$(COLOR_GREEN)✅ Контейнер остановлен$(COLOR_RESET)"

## docker-restart: Перезапустить контейнер
docker-restart:
	@echo "$(COLOR_BLUE)🔄 Перезапуск контейнера...$(COLOR_RESET)"
	docker restart $(CONTAINER_NAME)
	@echo "$(COLOR_GREEN)✅ Контейнер перезапущен$(COLOR_RESET)"

## docker-logs: Показать логи контейнера
docker-logs:
	@echo "$(COLOR_BLUE)📋 Логи контейнера $(CONTAINER_NAME):$(COLOR_RESET)"
	docker logs -f $(CONTAINER_NAME)

## docker-shell: Войти в контейнер
docker-shell:
	@echo "$(COLOR_BLUE)🐚 Вход в контейнер...$(COLOR_RESET)"
	docker exec -it $(CONTAINER_NAME) /bin/sh

## docker-clean: Удалить контейнер и образ
docker-clean: docker-stop
	@echo "$(COLOR_BLUE)🧹 Удаление образа...$(COLOR_RESET)"
	-docker rmi $(IMAGE_NAME) 2>/dev/null || true
	@echo "$(COLOR_GREEN)✅ Очистка завершена$(COLOR_RESET)"

## docker-deploy: Полный деплой (остановить, собрать, запустить)
docker-deploy: docker-stop docker-build docker-run
	@echo "$(COLOR_GREEN)🎉 Деплой завершён успешно!$(COLOR_RESET)"
	@echo "$(COLOR_YELLOW)🌐 Сайт доступен на: http://localhost:$(PORT)$(COLOR_RESET)"

## docker-update: Обновление из репозитория и полный деплой
docker-update:
	@echo "$(COLOR_BLUE)📥 Обновление из Git репозитория...$(COLOR_RESET)"
	git pull origin main || git pull origin master
	@echo "$(COLOR_GREEN)✅ Код обновлён$(COLOR_RESET)"
	@echo ""
	$(MAKE) docker-deploy
	@echo ""
	@echo "$(COLOR_GREEN)🎉 Обновление завершено!$(COLOR_RESET)"
	@echo "$(COLOR_YELLOW)🌐 Сайт обновлён и доступен на: http://localhost:$(PORT)$(COLOR_RESET)"

# Docker Compose команды (если используется)
## compose-up: Запустить через docker-compose
compose-up:
	@echo "$(COLOR_BLUE)🚀 Запуск через Docker Compose...$(COLOR_RESET)"
	docker-compose up -d
	@echo "$(COLOR_GREEN)✅ Запущено!$(COLOR_RESET)"

## compose-down: Остановить docker-compose
compose-down:
	@echo "$(COLOR_BLUE)🛑 Остановка Docker Compose...$(COLOR_RESET)"
	docker-compose down
	@echo "$(COLOR_GREEN)✅ Остановлено$(COLOR_RESET)"

## compose-logs: Логи docker-compose
compose-logs:
	docker-compose logs -f

## compose-update: Обновление через docker-compose
compose-update:
	@echo "$(COLOR_BLUE)📥 Обновление из Git репозитория...$(COLOR_RESET)"
	git pull origin main || git pull origin master
	@echo "$(COLOR_GREEN)✅ Код обновлён$(COLOR_RESET)"
	@echo ""
	@echo "$(COLOR_BLUE)🔨 Пересборка и перезапуск...$(COLOR_RESET)"
	docker-compose down
	docker-compose up -d --build
	@echo "$(COLOR_GREEN)🎉 Обновление завершено!$(COLOR_RESET)"
