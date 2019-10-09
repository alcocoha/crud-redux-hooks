import React from "react";

// Redux
import createProductAction from "../store/actions/products-actions";
import validateFormAction, { validateFormSuccess, validateFormError } from "../store/actions//validation-actions";
import { useDispatch, useSelector } from "react-redux";

const NuevoProducto = ({ history }) => {

  // Se crea el state local del formulario
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

  // Redux
  const dispatch = useDispatch();
  const addProduct = product => dispatch( createProductAction( product ) );
  const validateForm = () => dispatch( validateFormAction() );
  const validationSuccess = () => dispatch( validateFormSuccess() );
  const validationError = () => dispatch( validateFormError() );

  //Obtenemos los datos del State
  const error = useSelector( state => state.validateForm.error );

  const onClick = e => {
    e.preventDefault();

    validateForm();

    // Validar el formulario
    if (name.trim() === "" || price.trim() === "") {
      console.log("Error validacion");
      validationError();
      return false;
    }
    // Si pasa la validación
    validationSuccess();

    // Crear el producto
    addProduct({ name, price });

    // Redireccionar
    history.push('/')
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">
              Agregar Nuevo Libro
            </h2>
            <form>
              <div className="form-group">
                <label>Nombre Libro</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Libro"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Libro</label>
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  placeholder="Precio Libro"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                onClick={onClick}
              >
                Agregar
              </button>
            </form>
            {
              error ? 
                <div className="font-weight-bold alert alert-danger text-center mt-4">
                  Todos los campos son obligatorios
                </div>
              : null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
