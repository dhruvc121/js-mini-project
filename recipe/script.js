const favMealId=[]
const random_recipe=async()=>{
	const btn=document.querySelector(".meal-body .fav-btn")
	btn.classList.remove("active")
	const response=await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
	const resData=await response.json()
	const mealData=await resData.meals[0]
	const random=document.getElementById('random')
	const random_img=document.getElementById('random_img')
	random.innerHTML=mealData.strMeal
	random_img.src=mealData.strMealThumb
	btn.addEventListener("click",()=>{
		//favMealId.push(mealData.idMeal)
		btn.classList.add("active")
		addToFav(mealData)
	})
}

//unneccessary elemets are added to fav meals
const addToFav=async(mealData)=>{
	const fav_meals=document.getElementById('fav-meals')
	fav_meals.innerHTML=""
	//id.forEach(displayFav())
	// const url='https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id
	// const response=await fetch(url)
	// const resData=await response.json()
	// const mealData=await resData.meals[0];
	const meal=document.createElement("li")
	
	meal.innerHTML=`<img src="${mealData.strMealThumb}"
					     alt="${mealData.strMeal}
					     "/><span>${mealData.strMeal}</span>
					     <button class="clear"><i class="fas fa-window-close"></i></button>
					     `
	fav_meals.appendChild(meal)
	random_recipe()
}

const serach_recipe=async()=>{
	const btn=document.getElementById("search")
	const search=document.getElementById("serach_term")
	const addMeal=document.getElementById("meals")
	//const url="https://www.themealdb.com/api/json/v1/1/search.php?s="
	btn.addEventListener("click",async()=>{
		const url="https://www.themealdb.com/api/json/v1/1/filter.php?i="+search.value
		const res=await fetch(url)
		const resData=await res.json()
		const meals=await resData.meals
		const meal=document.createElement("div")
		const addMeal=document.getElementById('meals')
		meals.forEach((meal)=>{
			console.log(meal)
			meal.innerHTML=`<div class="meal">
		 		<div class="meal-header">
		 			<img id="random_img" src="${meal.strMealThumb}">
		 		</div>
		 		<div class="meal-body">
		 			<h4 id="random">${meal.strMeal}</h4>
		 			<button class="fav-btn active">
		 				<i class="fas fa-heart"></i>
		 			</button>
		 		</div>
		 	</div>`
		 	addMeal.appendChild(meal)
		})
		// resData.forEach((meals)=>{
		// 	meal.innerHTML=`<div class="meal">
		// 		<div class="meal-header">
		// 			<img id="random_img" src="${meals.strMealThumb}">
		// 		</div>
		// 		<div class="meal-body">
		// 			<h4 id="random">${meals.strMeal}</h4>
		// 			<button class="fav-btn active">
		// 				<i class="fas fa-heart"></i>
		// 			</button>
		// 		</div>
		// 	</div>`
		// })
	})
}
serach_recipe()
//random_recipe()
