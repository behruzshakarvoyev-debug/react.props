# 17-qism: props bilan bog'liq xatolar (natijalar sinab ko'rilgan)

Har bir holat `ProductCard` komponentida haqiqatan sinab ko'rildi.

| # | Holat | Nima bo'ladi | Nima uchun |
|---|-------|--------------|------------|
| 1 | `price` yuborilmasa | Xato chiqmaydi, ekranda **`NaN so'm`** ko'rinadi | `undefined - (undefined * 0) / 100` = `NaN` |
| 2a | `isAvailable="false"` (string) | **"Sotuvda mavjud"** chiqadi va "Savatga qo'shish" tugmasi ham ko'rinadi | Bo'sh bo'lmagan string JavaScript'da `true` hisoblanadi |
| 2b | `isAvailable` berilmasa (`undefined`) | **"Mahsulot tugagan"** chiqadi | `undefined` `false` hisoblanadi |
| 3 | Prop nomi noto'g'ri (`prodcut={...}`) | **Butun ilova qulaydi** (oq ekran). Xato: `Cannot destructure property 'title' of 'product' as it is undefined` | `product` prop kelmadi, destructuring `undefined` ustida ishlamaydi |
| 4 | Mavjud bo'lmagan prop ishlatilsa (`props.color`) | Xato yo'q, joyi **bo'sh** chiqadi | React `undefined` ni ekranga chiqarmaydi |
| 5 | Obyektda noto'g'ri property (`prise` deb yuborilsa) | Xato yo'q, ekranda **`NaN so'm`** | `product.price` `undefined` bo'lib qoladi |
| 6 | Callback berilmasa | `onAddToCart?.(product)` yozilgani uchun **hech narsa bo'lmaydi**. `?.` bo'lmasa, tugma bosilganda `... is not a function` xatosi chiqadi | `undefined` ni funksiya sifatida chaqirib bo'lmaydi |

## Xulosa
- **Ehtiyot bo'ling:** 1, 2a va 5-holatlarda xato xabari chiqmaydi, lekin ekranda noto'g'ri narsa ko'rinadi. Bunday xatolarni topish qiyinroq.
- **Eng xavflisi** 3-holat: bitta noto'g'ri prop nomi butun sahifani o'chirib yuboradi.
- Himoya uchun: default qiymatlar (`discount = 0`), `?.` va shartli chiqarish shu xatolardan saqlaydi.
