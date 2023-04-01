import { useFormik } from "formik";
import { FunctionComponent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { SiteTheme } from "../App";
import Card from "../interfaces/card";
import { addCardtoClist, getList } from "../services/cardList";
import { successMsg } from "../services/feedbacks";
import { getIsBusiness } from "../services/userService";


interface AddCardProps {
    quan: number;
    setQuan: Function;
    setNewC: Function;

}

const AddCard: FunctionComponent<AddCardProps> = ({ quan, setQuan, setNewC }) => {
    let nav = useNavigate();
    let formik = useFormik({
        initialValues: { businessName: "", businessDescription: "", businessAddress: "", businessPhone: "", businessImage: "", cardColor: "" },
        validationSchema: yup.object({
            businessName: yup.string().required("Name is required").min(3),
            businessDescription: yup.string().required("Description is required").min(5).max(30),
            businessAddress: yup.string().required("Address is required").min(9),
            businessPhone: yup.string().required("Phone is required").min(9).max(10),
            businessImage: yup.string().required("Image is required")
        }),
        onSubmit: (values: Card, { resetForm }) => {
            console.log(values);
            addCardtoClist(values).then(() => {
                successMsg('card added!');
                setNewC(true);
                if (getIsBusiness()) {
                    getList().then((res) => {
                        setQuan(res.data.quantity)
                        localStorage.setItem("quantity", JSON.stringify(res.data.quantity));
                    }).catch((err) => console.log(err));
                }
                nav("/my-cards");

            }).catch((err) => console.log(err));
            resetForm();

        }
    })
    const theme = useContext(SiteTheme);
    return <>
        <div style={{ color: theme.color, background: theme.background }} className="darkM">
            <div style={{ marginRight: "0", height: "86vh", overflow: "auto" }} className="row">
                <div style={{ padding: "50px", paddingBottom: "90px" }} className="container col-md-4">
                    <h1 className="display-4 text-center" >Add Card</h1>
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
                        <button style={{ color: theme.color, background: theme.btn }} type="submit" className="btn w-100" disabled={!formik.dirty || !formik.isValid}>Add Card</button>
                    </form>
                </div>

                <div style={{ padding: "0", justifyContent: "center", alignItems: "center", alignContent: "center", textAlign: "center" }} id="pic" className="col-md-7 divCardShow">
                    <div style={{ width: "100%", height: "100%", position: "relative" }}>
                        <h1 style={{ position: "absolute", top: "3vh", left: "10.5vw" }} className="text-center display-2 ">Generate Card</h1>
                        <div id="createCardShow" className="darkM card" style={{ display: "inline-block", padding: "10px", margin: "5px", width: "20rem", border: `5px solid ${theme.color}`, backgroundColor: theme.background, color: theme.color }}>
                            <h5 style={{ fontSize: "27px" }} className="cart-title text-center mt-2" >{formik.values.businessName}</h5>
                            <hr />
                            <div style={{ height: "250px" }}>
                                <img style={{ height: "100%", borderRadius: "6px" }} src={formik.values.businessImage} className="align-self-center card-img-top" alt="Photo" />
                            </div>
                            <div className="card-body">
                                <p className="card-text text-center mt-3">{formik.values.businessDescription}</p>
                                <h5 className="card-text text-center mt-1">{formik.values.businessPhone}</h5>
                                <h5 className="card-text text-center mt-2" >{formik.values.businessAddress}</h5>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </>
}

export default AddCard;