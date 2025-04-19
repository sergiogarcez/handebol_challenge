<?php
header('Content-Type: application/json');

$action = $_GET['action'] ?? '';

if ($action === 'listar') {
    $dados = file_get_contents("dados.json");
    echo $dados;
} elseif ($action === 'cadastrar' && $_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $dados = json_decode(file_get_contents("dados.json"), true);
    
    $data["id"] = count($dados) + 1; 
    $dados[] = $data;

    file_put_contents("dados.json", json_encode($dados, JSON_PRETTY_PRINT));
    echo json_encode(["status" => "sucesso"]);
}
?>