# QR-код для бота

## Автоматическая генерация не удалась

Пожалуйста, сгенерируйте QR-код вручную:

### Способ 1: Онлайн генератор
1. Перейдите на https://www.qr-code-generator.com/
2. Введите URL: `https://t.me/SochiNyashkaBot`
3. Скачайте изображение 200x200px
4. Сохраните как `qr-code.png` в эту папку

### Способ 2: API (если доступен)
```bash
curl -o qr-code.png "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://t.me/SochiNyashkaBot"
```

### Способ 3: Python
```python
import qrcode
qr = qrcode.QRCode(version=1, box_size=10, border=5)
qr.add_data('https://t.me/SochiNyashkaBot')
qr.make(fit=True)
img = qr.make_image(fill_color="black", back_color="white")
img.save('qr-code.png')
```

## Временный placeholder

До генерации реального QR-кода компонент покажет визуальный placeholder.
Разместите файл `qr-code.png` в эту папку для замены.
