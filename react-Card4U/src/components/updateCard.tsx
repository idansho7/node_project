import { FunctionComponent, useContext } from "react";
import Card from "../interfaces/card";
import * as yup from "yup";
import { useFormik } from "formik";
import { SiteTheme } from "../App";
import { successMsg } from "../services/feedbacks";
import { updateCard } from "../services/card";

interface UpdateCardProps {
    onHide: Function;
    change: boolean;
    setChange: Function;
    cardInfo: Card;


}

const UpdateCard: FunctionComponent<UpdateCardProps> = ({ onHide, change, setChange, cardInfo }) => {
    const theme = useContext(SiteTheme);


    let formik = useFormik({
        initialValues: {
            businessName: cardInfo.businessName, businessDescription: cardInfo.businessDescription, businessAddress: cardInfo.businessAddress, businessPhone: cardInfo.businessPhone, businessImage: cardInfo.businessImage, cardColor: cardInfo.cardColor,
            _id: cardInfo._id
        },
        validationSchema: yup.object({
            businessName: yup.string().required().min(3),
            businessDescription: yup.string().required().min(5).max(30),
            businessAddress: yup.string().required().min(9),
            businessPhone: yup.string().required().min(9).max(10),
            businessImage: yup.string().required(),
            _id: yup.string()
        }),
        onSubmit: (values: Card) => {
            // updateCardByDes(JSON.parse(localStorage.getItem("userId") as string), values, cardInfo.businessDescription).then(() => { onHide(); setChange(!change);successMsg("Card Updated!") })
            console.log(values);
            updateCard(values)
                .then(() => {
                    onHide();
                    setChange(!change);
                    successMsg("card updated!");
                })
                .catch((err) => { console.log(err) });
        }
    })

    return <>
        <div style={{ padding: "50px", paddingBottom: "90px" }} className="container col-md-6">
            <h1 className="display-4 text-center" >Update Card</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="example@test.com"
                        name="businessName"
                        value={formik.values.businessName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label style={{ color: "#161616" }} htmlFor="floatingInput">Name</label>
                    {formik.touched.businessName && formik.errors.businessName && (
                        <small className="text-danger">{formik.errors.businessName}</small>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="example@test.com"
                        name="businessDescription"
                        value={formik.values.businessDescription}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label style={{ color: "#161616" }} htmlFor="floatingInput">Description</label>
                    {formik.touched.businessDescription && formik.errors.businessDescription && (
                        <small className="text-danger">{formik.errors.businessDescription}</small>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="example@test.com"
                        name="businessAddress"
                        value={formik.values.businessAddress}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label style={{ color: "#161616" }} htmlFor="floatingInput">Address</label>
                    {formik.touched.businessAddress && formik.errors.businessAddress && (
                        <small className="text-danger">{formik.errors.businessAddress}</small>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="example@test.com"
                        name="businessPhone"
                        value={formik.values.businessPhone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label style={{ color: "#161616" }} htmlFor="floatingInput">Phone</label>
                    {formik.touched.businessPhone && formik.errors.businessPhone && (
                        <small className="text-danger">{formik.errors.businessPhone}</small>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="example@test.com"
                        name="businessImage"
                        value={formik.values.businessImage}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label style={{ color: "#161616" }} htmlFor="floatingInput">Image</label>
                    {formik.touched.businessImage && formik.errors.businessImage && (
                        <small className="text-danger">{formik.errors.businessImage}</small>
                    )}
                </div>
                <button style={{ color: theme.color, background: theme.btn }} type="submit" className="btn w-100" disabled={!formik.isValid}>Update</button>
            </form>
        </div>
    </>
}

export default UpdateCard;