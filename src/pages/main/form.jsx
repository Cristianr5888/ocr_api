import React from "react";
import { TextField, Button, MenuItem, Grid, Box } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Esquema de validación con Yup
const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
  apellidoPaterno: Yup.string().required("El apellido paterno es obligatorio"),
  apellidoMaterno: Yup.string().required("El apellido materno es obligatorio"),
  fechaNacimiento: Yup.date().required("La fecha de nacimiento es obligatoria"),
  sexo: Yup.string().required("Selecciona tu sexo"),
  curp: Yup.string()
    .matches(
      /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z\d]{2}$/,
      "CURP no tiene un formato válido"
    )
    .required("El CURP es obligatorio"),
});

const Formulario = () => {
  const initialValues = {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "",
    sexo: "",
    curp: "",
  };

  const handleSubmit = (values) => {
    console.log("Datos enviados:", values);
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "0 auto", padding: 2 }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="nombre"
                  label="Nombre"
                  error={touched.nombre && Boolean(errors.nombre)}
                  helperText={touched.nombre && errors.nombre}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="apellidoPaterno"
                  label="Apellido Paterno"
                  error={touched.apellidoPaterno && Boolean(errors.apellidoPaterno)}
                  helperText={touched.apellidoPaterno && errors.apellidoPaterno}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="apellidoMaterno"
                  label="Apellido Materno"
                  error={touched.apellidoMaterno && Boolean(errors.apellidoMaterno)}
                  helperText={touched.apellidoMaterno && errors.apellidoMaterno}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  type="date"
                  name="fechaNacimiento"
                  label="Fecha de Nacimiento"
                  InputLabelProps={{ shrink: true }}
                  error={touched.fechaNacimiento && Boolean(errors.fechaNacimiento)}
                  helperText={touched.fechaNacimiento && errors.fechaNacimiento}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  select
                  fullWidth
                  name="sexo"
                  label="Sexo"
                  error={touched.sexo && Boolean(errors.sexo)}
                  helperText={touched.sexo && errors.sexo}
                >
                  <MenuItem value="H">Hombre</MenuItem>
                  <MenuItem value="M">Mujer</MenuItem>
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="curp"
                  label="CURP"
                  error={touched.curp && Boolean(errors.curp)}
                  helperText={touched.curp && errors.curp}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained" color="primary">
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Formulario;