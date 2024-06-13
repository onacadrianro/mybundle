<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medal Cards</title>
    <link rel="stylesheet" href="frontend/css/styles.css">
</head>
<body>
    <?php include __DIR__ . '/header.php'; ?>

    <section class="hero">
        <h1>All challenges</h1>
        <div class="sort">
            <label for="sort">Sort by:</label>
            <select id="sort">
                <option value="popular">Popular</option>
            </select>
        </div>
    </section>
    <div class="medal-cards">

        <div class="medal-card" data-item="Mount Kilimanjaro" data-cost="100">
            <img src="frontend/img/medal-Kilimanjaro.png" alt="Mount Kilimanjaro">
            <h2>Mount Kilimanjaro</h2>
            <p>60 mi / 97 km</p>
            <p>5 Virtual Postcards<br>No StreetView</p>
            <button>Add challenge</button>
        </div>
        <div class="medal-card" data-item="Angkor Wat" data-cost="200">
            <img src="frontend/img/medal-Angkor.png" alt="Angkor Wat">
            <h2>Angkor Wat</h2>
            <p>20 mi / 32 km</p>
            <p>4 Virtual Postcards<br>Has StreetView</p>
            <button>Add challenge</button>
        </div>
        <div class="medal-card" data-item="Inca Trail" data-cost="300">
            <img src="frontend/img/medal-Inca.png" alt="Inca Trail">
            <h2>Inca Trail</h2>
            <p>26 mi / 42 km</p>
            <p>4 Virtual Postcards<br>Has StreetView</p>
            <button>Add challenge</button>
        </div>
        <div class="medal-card" data-item="Flower Route" data-cost="400">
            <img src="frontend/img/medal-Flower.png" alt="Flower Route">
            <h2>Flower Route</h2>
            <p>41 mi / 66 km</p>
            <p>4 Virtual Postcards<br>Has StreetView</p>
            <button>Add challenge</button>
        </div>
    </div>

    <?php include __DIR__ . '/footer.php'; ?>

    <script src="frontend/js/script.js"></script>
    </body>
</html>
