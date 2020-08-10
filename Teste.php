<html>

<head>
    <link type="text/css" rel="stylesheet" charset="UTF-8" href="https://translate.googleapis.com/translate_static/css/translateelement.css">
    <script type="text/javascript" charset="UTF-8" src="https://translate.googleapis.com/translate_static/js/element/main.js"></script>
    <script type="text/javascript" charset="UTF-8" src="https://translate.googleapis.com/element/TE_20200506_00/e/js/element/element_main.js"></script>
</head>

<body>
<?php
function crawl_page($url)
{
        $html = file_get_contents($url);

        preg_match_all('~<a.*?href="(.*?)".*?>~', $html, $matches);


        file_put_contents('results.txt', "\n\n" . $html . "\n\n", FILE_APPEND);
        echo "\n\n" . $html . "\n\n";
    
}


crawl_page('https://benitomarculanoribeiro.000webhostapp.com');
?>
</body>

</html>