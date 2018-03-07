var zodiacData = [
	{
		'name' : 'mouse',
		'image': 'mouse.jpg',
		'description': "Mouse-forthright, generous, outgoing, loves money, hates waste"
	},
	{
		name: 'buffalo',
		image: 'buffalo.jpg',
		description: "Buffalo-calm, dependable, obstinate, reliable, proud, and can be uncompromising"
	},
	{
		name: 'tiger',
		image: 'tiger.jpg',
		description: "Tiger-loving, giving, optimistic, idealistic, stubborn, self-centered, emotional"
	},
	{
		name: 'rabbit',
		image: 'rabbit.jpg',
		description: " Rabbit-careful, systematic, considerate, can be indifferent, temperamental, shrewd"
	},
	{
		name: 'dragon',
		image: 'dragon.jpg',
		description: "Dragon-lóng strong, energetic, proud, confident, but can be illogical and obsessive. Read about the dragon boat festival "
	},
	{
		name: 'snake',
		image: 'snake.jpg',
		description: "Snake-intellectual, superstitious, independent, private, cautious"
	},
	{
		name: 'horse',
		image: 'horse.jpg',
		description: "Horse-cheerful, lively, impulsive, manipulative, friendly, self-reliant "
	},
	{
		name: 'sheep',
		image: 'sheep.jpg',
		description: "Sheep- good-natured, timid, emotional, pessimistic, mild, forgiving"
	},
	{
		name: 'monkey',
		image: 'monkey.jpg',
		description: "Monkey-successful, charming, crafty, can be dishonest, self-centered, inquisitive "
	},
	{
		name: 'rooster',
		image: 'rooster.jpg',
		description: "Rooster-conservative, aggressive, decisive, logical, can be overly critical"
	},
	{
		name: 'dog',
		image: 'dog.jpg',
		description: "Dog-clever, willing to help others, open-minded, practical, can be belligerent "
	},
	{
		name: 'pig',
		image: 'pig.jpg',
		description: "Pig-zhū brave, trustworthy, patient, diplomatic, can be hot-tempered"
	},
	
]

var zodiacAnimals = ['monkey','rooster','dog', 'pig', 'mouse', 'buffalo', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep'];

function getAnimalName(year) {
	if(year) {
		var animalIndex = year % 12;
		return zodiacAnimals[animalIndex];
	}
	
	return "";
}

function getAnimalInformation(animalName) {
	var index = 0;
	
	while(index < zodiacData.length) {
		if(animalName == zodiacData[index].name) {
			return zodiacData[index];
		}
		
		index++;
	}
	
	return {}
}

function showZodiacInformation(animalName) {
	var $information = $('.information');
	
	$information.find('h2').text(animalName);
	
	var animalInformation = getAnimalInformation(animalName);
	$information.find('img').attr('src', animalInformation['image']);
	$information.find('p').text(animalInformation['description']);
}

$('.yearOfBirth').submit(function(event){
			
	var chosenYear = $('.yearValue').val();
	var animalName = getAnimalName(chosenYear);
	console.log(chosenYear);
	console.log(getAnimalName(chosenYear));
	showZodiacInformation(animalName);
	
	event.preventDefault();
});