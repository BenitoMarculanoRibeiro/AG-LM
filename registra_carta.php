<?php
    require_once('db.class.php');
    require_once('Carta.class.php');
    $nome = $_POST['nome'];
    $objDb = new db();
    $link = $objDb->conecta_mysql();
    $carta = new Carta();
    if ($carta->retornaId($_POST['nome'])) {
        $carta->criar($nome);
        $carta->salvar();
    }else{
        header('Location: ../index.php?erro=1');
    }
?>