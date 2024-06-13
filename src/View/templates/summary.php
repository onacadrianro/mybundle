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

    <section id="summary-section">
        <h2>Summary</h2>
        <ul id="summary-list"></ul>
        <p id="total-cost"></p>
        <a href="/" id="checkout-button">Back to Challenges</a>
    </section>

    <?php include __DIR__ . '/footer.php'; ?>

    <script src="frontend/js/summary.js"></script>
</body>
</html>