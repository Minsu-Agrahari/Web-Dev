Flipping Card 🎴

Overview 📌
This project features a **flipping card animation** using HTML and CSS. The card has both a **front and back side**, designed to resemble a **MasterCard** 💳. When hovered over, the card flips to reveal its back side.

Technologies Used 🛠️
- **HTML** for structuring the card.
- **CSS** for styling and animations.
- **Google Fonts (Poppins)** for typography.
- **Blur and Gradient Effects** for modern UI design.

Features ✨
- **3D Flip Animation** using CSS `transform`.
- **Front Side**: Displays the card number, name, expiration date, and card logo.
- **Back Side**: Displays the magnetic strip, customer service details, and security code.
- **Glassmorphism Effect** for an elegant appearance.

Folder Structure 📂
```
project-folder/
│── index.html  (Main HTML file)
│── style.css   (CSS styles)
│── img/        (Contains logo and chip images)
```

How to Use 🚀
1. Open `index.html` in a web browser.
2. Hover over the card to see the flipping animation.

Code Explanation 💡
**HTML** (`index.html`)
- The structure consists of a **container** with two `.card` divs (front and back faces).
- The **front face** contains:
  - A header with a logo and chip image.
  - Card details including the number, name, and expiry date.
- The **back face** contains:
  - Customer service details.
  - A magnetic strip and a signature box with the CVV code.

**CSS** (`style.css`)
- **Container Animation:** Uses `perspective: 1000px;` and `transform: rotateY(180deg);` on hover.
- **Blurred Glassmorphism Effect:** Achieved using `backdrop-filter: blur(25px);`.
- **Responsive Design:** Flexible sizing and font adjustments.
- **Background Effects:** Gradient circles to enhance visual appeal.

Screenshots 📸
(Include screenshots of the front and back of the card if possible)

**Front face of the card :-**
![Screenshot 2025-02-24 205721](https://github.com/user-attachments/assets/6eaee5fa-4036-4cc3-8114-2eb5c5ec3d11)

**Back face of the card :-**
![Screenshot 2025-02-24 205735](https://github.com/user-attachments/assets/eae82432-197a-4b36-a4f5-8b23338a38b5)

Author ✍️
**Minsu Agrahari**

## License 📜
This project is free to use for educational purposes.

