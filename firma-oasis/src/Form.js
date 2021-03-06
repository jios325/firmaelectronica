import React from "react";
import { Form, Field } from "react-final-form";
import Preview from "./Preview";
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      loader: false,
      hotel: "",
      showCopy: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setRef = this.setRef.bind(this);
  }
  handleSelect(event) {
    this.setState({
      hotel: event.target.value,
    });
  }
  setRef(input) {
    this.childRef = input;
  }
  onSubmit(values) {
    this.setState({
      loader: true,
      showCopy: true,
    });
    setTimeout(() => {
      this.setState({
        loader: false,
      });
    }, 1000);
  }
  clearSelection() {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      document.selection.empty();
    }
  }
  copyToClipboard = (e) => {
    try {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(this.childRef);
      selection.removeAllRanges();
      selection.addRange(range);
      console.log(range, range.startContainer.innerHTML, selection);
      document.execCommand("copy");
      alert("Copiado al Portapapeles");
      this.clearSelection();
    } catch (err) {
      alert("Copy failed.");
    }
  };
  onChange() {
    console.log("change");
    this.setState({
      showCopy: false,
    });
  }
  render() {
    return (
      // (!this.state.loader)?
      <Form
        onSubmit={this.onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.nombre) {
            errors.nombre = "Required";
          }
          if (!values.apellido) {
            errors.apellido = "Required";
          }
          if (!values.puesto) {
            errors.puesto = "Required";
          }
          if (!values.telefono) {
            errors.telefono = "Required";
          } else if (isNaN(values.telefono)) {
            errors.telefono = "Must be a number";
          } else if (values.telefono.length < 10) {
            errors.telefono = "Telefono a 10 Digitos";
          }
          if (values.celular && values.celular.length < 10) {
            errors.celular = "Telefono a 10 Digitos";
          }
          if (!values.hotel) {
            errors.hotel = "Required";
          }
          if (values.extension && isNaN(values.extension)) {
            errors.extension = "Must be a number";
          }
          return errors;
        }}
        render={({ handleSubmit, pristine, invalid, submitting, reset, form, values }) => (
          <React.Fragment>
            <form onSubmit={handleSubmit} className='container-fluid container'>
              <div className='row'>
                <div className='col-xs-12'>
                  <div className='row'>
                    <div className='form-group col-xs-12 col-sm-4'>
                      <Field name='hotel'>
                        {({ input, meta }) => {
                          const { onChange } = input;
                          const mergedOnChange = (e) => {
                            this.onChange(e);
                            onChange(e);
                          };
                          const newInput = { ...input, onChange: mergedOnChange };
                          return (
                            <div>
                              <label className='form__label required'>Hotel:</label>
                              <div className='select'>
                                <select {...newInput} className='form-control'>
                                  <option value='' disabled selected>
                                    Selecciona un Hotel
                                  </option>
                                  <option value='ohr'>Corporativo</option>
                                  <option value='pyr'>The Pyramid at Grand Oasis</option>
                                  <option value='goc'>Grand Oasis Cancun</option>
                                  <option value='gop'>Grand Oasis Palm</option>
                                  <option value='op'>Oasis Palm</option>
                                  {/* <option value="gos">Grand Oasis Sens</option> */}
                                  <option value='oh'>Oh! The Urban Oasis</option>
                                  <option value='smart'>Smart Cancun by Oasis</option>
                                  {/* <option value="got">Grand Oasis Tulum</option> */}
                                </select>
                              </div>
                              {meta.error && meta.touched && <span className='alert alert-error'>{meta.error}</span>}
                            </div>
                          );
                        }}
                      </Field>
                    </div>
                    <div className='form-group col-xs-12 col-sm-4'>
                      <Field name='nombre'>
                        {({ input, meta }) => (
                          <div>
                            <label className='form__label required'>Nombre:</label>
                            <input
                              {...input}
                              type='text'
                              placeholder='Nombre'
                              className='form-control'
                              onChange={(e) => {
                                input.onChange(e);
                                this.onChange();
                              }}
                            />
                            {meta.error && meta.touched && <span className='alert alert-error'>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                    </div>
                    <div className='form-group col-xs-12 col-sm-4'>
                      <Field name='apellido'>
                        {({ input, meta }) => (
                          <div>
                            <label className='form__label required'>Apellido:</label>
                            <input
                              {...input}
                              type='text'
                              placeholder='Apellido'
                              className='form-control'
                              onChange={(e) => {
                                input.onChange(e);
                                this.onChange();
                              }}
                            />
                            {meta.error && meta.touched && <span className='alert alert-error'>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                    </div>
                    <div className='form-group col-xs-12 col-sm-4'>
                      <Field name='puesto'>
                        {({ input, meta }) => (
                          <div>
                            <label className='form__label required'>Puesto:</label>
                            <input
                              {...input}
                              type='text'
                              placeholder='Puesto'
                              className='form-control'
                              onChange={(e) => {
                                input.onChange(e);
                                this.onChange();
                              }}
                            />
                            {meta.error && meta.touched && <span className='alert alert-error'>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                    </div>
                    <div className='form-group col-xs-12 col-sm-3'>
                      <Field name='celular'>
                        {({ input, meta }) => (
                          <div>
                            <label className='form__label'>Celular:</label>
                            <input
                              {...input}
                              type='text'
                              placeholder='Celular'
                              className='form-control'
                              onChange={(e) => {
                                input.onChange(e);
                                this.onChange();
                              }}
                            />
                            {meta.error && meta.touched && <span className='alert alert-error'>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                    </div>
                    <div className='form-group col-xs-12 col-sm-3'>
                      <Field name='telefono'>
                        {({ input, meta }) => (
                          <div>
                            <label className='form__label required'>Teléfono:</label>
                            <input
                              {...input}
                              type='text'
                              placeholder='Telefono'
                              className='form-control'
                              maxLength='10'
                              onChange={(e) => {
                                input.onChange(e);
                                this.onChange();
                              }}
                            />
                            {meta.error && meta.touched && <span className='alert alert-error'>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                    </div>
                    <div className='form-group col-xs-12 col-sm-2'>
                      <Field name='extension'>
                        {({ input, meta }) => (
                          <div>
                            <label className='form__label required'>Extensión:</label>
                            <input
                              {...input}
                              type='text'
                              placeholder='Extensión'
                              className='form-control'
                              onChange={(e) => {
                                input.onChange(e);
                                this.onChange();
                              }}
                            />
                            {meta.error && meta.touched && <span className='alert alert-error'>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-center mt-20'>
                <button className='btn btn-primary mr-20-md' type='submit' disabled={pristine}>
                  Generar
                </button>
                <button
                  type='button'
                  className='btn btn-reset'
                  onClick={(e) => {
                    form.reset();
                    this.onChange(e);
                  }}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </form>
            <div className='border--dashed'></div>
            <div>
              <div className={`preview mt-20 mt-30-md ${this.state.showCopy ? "" : "disabled"}`}>
                <span className='preview__title'>VISTA PREVIA</span>
                <div className='preview__inner'>
                  <Preview data={values} setRef={this.setRef} />
                </div>
              </div>
              {this.state.showCopy && (
                <div className='text-center'>
                  <button className=' text-center btn btn-primary mt-20 mt-30-md mb-20' onClick={this.copyToClipboard}>
                    Copiar al portapapeles
                  </button>
                </div>
              )}
            </div>
          </React.Fragment>
        )}
      />
      // :'loading...'
    );
  }
}
export default MyForm;
