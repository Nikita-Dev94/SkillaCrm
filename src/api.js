import axios from "axios"
const pathApi = 'https://api.skilla.ru/';


export const getCalls = (dateStart, dateEnd,InOut) => {
	return axios
		.post(`${pathApi}mango/getList?date_start=${dateStart}&date_end=${dateEnd}&im-out=${InOut}`, {}, {
            withCredentials: true,
			headers: {
                Authorization: 'Bearer testtoken'
            }
				
			
		})
		.then(res => {
			return res.data.results
		})

}