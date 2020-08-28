<?php
class Database {
	public $mysqli;
    public $db;

     function __construct(){
		$this->db = "lm";		
		$this->mysqli = new mysqli("localhost","root", "", $this->db) or die (mysqli_error($_COOKIE));	
		if(mysqli_connect_errno())
		{
			trigger_error('mysqli_connect_error');				
		}
    }       
	
    function __destruct() {    	
		$this->mysqli->close();
    }
}
?>