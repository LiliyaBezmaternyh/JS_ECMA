// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.
const testURL = "https://jsonplaceholder.typicode.com/users";

function getUserData(ID, url) {
	return (
		fetch(url)
			// .then((response) => response.json())
			// .then((data) => console.log(data.filter((user) => user.id === ID)))
			// .catch((error) => console.log(error.message));
			.then((response) => response.json())
			.then((response) => {
				let flag = false;
				for (const el of response) {
					if (el.id === ID) {
						console.log(el);
						flag = true;
						break;
					}
				}
				if (flag === false) {
					throw "User id not found";
				}
			})
			.catch((error) => console.log(error))
	);
}
getUserData(3, testURL);

// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

const user = {
	name: "John Smith",
	age: 30,
	email: "john@example.com",
};

function saveUserData(data) {
	const header = {
		"Content-Type": "application/json",
	};
	return fetch(testURL, {
		method: "POST",
		body: JSON.stringify(data),
		headers: header,
	})
		.then((response) => {
			if (response.ok) {
				response.json();
				console.log("User data saved successfully");
			} else throw "Что-то пошло не так";
		})
		.catch((error) => {
			console.log(error.message);
		});
}
saveUserData(user);

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
// changeStyleDelayed("myElement", 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

function changeStyleDelayed1(elementID, delayTime) {
	setTimeout(() => (document.getElementById(elementID).style.color = "green"), delayTime);
}
function changeStyleDelayed2(elementID, delayTime) {
	setTimeout(() => (document.getElementById(elementID).style.width = "340px"), delayTime);
}
changeStyleDelayed1("text", 2000);
changeStyleDelayed2("photo", 2000);