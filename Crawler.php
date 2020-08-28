<?php
require_once '/xampp/htdocs/LigaMagic/AG-LM/lib/simple_html_dom.php';
class Temperatura
{
    public function __construct()
    {
        $this->getTemperatura('https://www.tempoagora.com.br/previsao-do-tempo/ES/Vitoria');
    }

    public function getTemperatura($url)
    {
        $html = file_get_html($url);
        preg_match_all('/ class=\"weather-temperature--temperature\">(.*?)<\/span>/', $html, $result);
        echo '<pre>';
        echo $result;
    }
}
$t = new Temperatura() ?>


<span data-v-70bf4055="" data-toggle="tooltip" data-placement="bottom" title="Temperatura" class="weather-temperature--temperature">22 <span data-v-70bf4055="">º</span></span>