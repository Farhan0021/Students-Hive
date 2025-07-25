import * as YUP from 'yup'

let PropertySchema = YUP.object({
    tittle : YUP.string().required("Insert Property Name"),
    address : YUP.string().required("Insert Property Address"),
    property_type : YUP.string().required("Select Property Type"),
    image : YUP.string().required("Select Property Image"),
    rent : YUP.number().typeError("Insert Amount in Numbers").required("Insert Property Rent"),
    advance_money : YUP.number().typeError("Insert Number Only").required("Insert Advance Money")
})

export default PropertySchema