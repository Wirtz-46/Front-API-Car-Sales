# Frontend de la API de Venta de Carros

## Descripción

Este es el frontend de la aplicación de venta de carros. Está desarrollado con React y permite gestionar clientes, carros y ventas a través de una interfaz de usuario intuitiva. La aplicación se comunica con un backend para realizar operaciones CRUD sobre las entidades clientes, carros y ventas.

## Características

- **Gestión de Clientes**
  - Crear, editar y eliminar clientes.
- **Gestión de Carros**
  - Crear, editar y eliminar carros.
- **Gestión de Ventas**
  - Registrar ventas de carros, asociándolas con clientes y carros.

## Tecnologías Utilizadas

- React
- Axios

## Instalación y Ejecución

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/tuusuario/venta-carros-frontend.git
    cd venta-carros-frontend
    ```

2. Instalar las dependencias:
    ```bash
    npm install
    ```

3. Ejecutar la aplicación:
    ```bash
    npm start
    ```

## Estructura del Código

- `src/components/ClientComponents/`:
  - `ClientsTable.jsx`: Tabla de clientes.
  - `ClientsForm.jsx`: Formulario de clientes.
  - `ClientsRow.jsx`: Fila de la tabla de clientes.

- `src/components/CarComponents/`:
  - `CarsTable.jsx`: Tabla de carros.
  - `CarsForm.jsx`: Formulario de carros.
  - `CarsRow.jsx`: Fila de la tabla de carros.

- `src/components/SaleComponents/`:
  - `SalesTable.jsx`: Tabla de ventas.
  - `SalesForm.jsx`: Formulario de ventas.
  - `SalesRow.jsx`: Fila de la tabla de ventas.

- `src/App.jsx`: Componente principal de la aplicación.
