import cors from "cors"

const corsOption:cors.CorsOptions = {
    origin:'*',
    methods:['POST','PUT','DELETE','GET','PATCH'],
    allowedHeaders:['Type-Content','Authorization']
}

export default corsOption;