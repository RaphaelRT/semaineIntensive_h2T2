
<?php
$id = empty($_GET['id']) ? '' : $_GET['id'];

if (!empty($_POST)) {
		$data = [
			'user' => htmlspecialchars($_POST['input1']) , 'message' => htmlspecialchars($_POST['input2']) , 'id_marker' => htmlspecialchars($_POST['input3']) 
		];
		if (empty('user')) {
				$alerts['error'][] = 'Missing name';
		}
		else
		if (strlen('user') < 2) {
				$alerts['error'][] = 'Name too short';
		}

		if (empty('message')) {
				$alerts['error'][] = 'Missing comment';
		}

		// Include in the database

		$prepare = $pdo->prepare('
                INSERT INTO
                    comments (user, message,id_marker)
                VALUES
                    (:user, :message, :id_marker)
            ');
		$prepare->bindValue('user', $data['user']);
		$prepare->bindValue('message', $data['message']);
		$prepare->bindValue('id_marker', $data['id_marker']);
		$prepare->execute();
		$alerts['success'][] = 'User registered';
}