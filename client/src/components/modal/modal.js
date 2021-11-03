import { useState } from 'react';
import './modal.css';
import * as messages from "../../constants/messages";
import * as constants from "../../constants/constants";
import AuthService from '../../services/auth';
import { ToastContainer, toast, Slide } from "react-toastify";

function Modal({ handleClose, show }) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const [passwords, setPasswords] = useState({
        old: '',
        new: '',
        newConfirm: ''
    });

    const [errors, setErrors] = useState({
        old: '',
        new: '',
        newConfirm: ''
    });

    const toastConfig = {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        hideProgressBar: true
    };

    const promijeniLozinku = async (event) => {
        event.preventDefault();
        try {
          if (validateData()) {
              console.log('dadadadada')
            await AuthService.changePassword(passwords.old, passwords.new);
            handleClose();
            toast.info(messages.PASSWORD_CHANGE_SUCCESS, toastConfig);
          }
        } catch(error) {
            toast.error(error.response?.data ?? messages.PASSWORD_CHANGE_ERROR);
        }
    }

    const validateData = () => {
        const newState = {
            old: passwords.old ? "" : messages.FIELD_REUIRED,
            new: passwords.new ? "" : messages.FIELD_REUIRED,
            newConfirm: passwords.newConfirm ? "" : messages.FIELD_REUIRED,
        };

        if (passwords.new && passwords.new.length < constants.MIN_PASSWORD_LENGTH) {
            newState.new = messages.PASSWORD_TOO_SHORT;
        }

        if (!newState.new && passwords.newConfirm !== passwords.new) {
            newState.newConfirm = messages.PASSWORD_MISMATCH;
        } else if (!passwords.newConfirm) {
            newState.newConfirm = messages.FIELD_REUIRED;
        } else {
            newState.newConfirm = "";
        }

        setErrors(newState);
        return !newState.old && !newState.new && !newState.newConfirm;
    }

    return (
        <div className={showHideClassName}>
            <div className="registration-form-container modal-form-container">
                <form className="registration-form modal-form">
                    <div className="form-field modal-field">
                        <label htmlFor="password" className="form-label">Stara lozinka</label>
                        <input type="password" id="password" value={passwords.old}
                            onChange={(e) => setPasswords({ ...passwords, old: e.target.value.trimStart() })}

                            className="form-input text-input"
                        />
                        <span>{errors.old}</span>
                    </div>
                    <div className="form-field modal-field">
                        <label htmlFor="password" className="form-label">Nova lozinka</label>
                        <input type="password" id="password" value={passwords.new} className="form-input text-input"
                            onChange={(e) => setPasswords({ ...passwords, new: e.target.value.trimStart() })}

                        />
                        <span>{errors.new}</span>
                    </div>
                    <div className="form-field modal-field">
                        <label htmlFor="password" className="form-label">Potvrda nove lozinke</label>
                        <input type="password" id="passwordConfirm" value={passwords.newConfirm} className="form-input text-input"
                            onChange={(e) => setPasswords({ ...passwords, newConfirm: e.target.value.trimStart() })}

                        />
                        <span>{errors.newConfirm}</span>
                    </div>
                    <br />
                    <div className="row">
                        <input type="submit" name="save" value="Sačuvaj" className="form-input submit-button save-button"
                        onClick={(e) => promijeniLozinku(e)} />
                        <input type="submit" name="save" value="Otkaži" className="form-input submit-button"
                            onClick={handleClose} />
                    </div>
                </form>
                <br />
            </div>
        </div>
    );
};

export default Modal;