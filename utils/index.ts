import { FilterProps } from "@types";

export async function fetchExercises(filters: FilterProps) {
    let { muscle, difficulty } = filters 

    const headers: HeadersInit = {
        'X-RapidAPI-Key': '442eeec4bamshf2dad67f709b582p19b762jsn84374ac914fe',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
        `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=${difficulty}&muscle=${muscle}`, {
            headers: headers
        }
    )

    const result = await response.json()

    return result
}


		

