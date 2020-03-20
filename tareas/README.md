# Programa gestionar una lista de tareas

Lista de comandos disponibles
```
node tareas/app.js --help
```

Lista de parametros del comando crear
```
node tareas/app.js crear --help
```

Crear una tarea
```
node tareas/app.js crear -d "Pasear al perro"
```

Actualizar estado una tarea
```
node tareas/app.js actualizar -d "Pasear al perro" -e false
node tareas/app.js actualizar -d "Pasear al perro" -e true
```

Listar tareas
```
node tareas/app.js listar
```

Borrar tareas
```
node tareas/app.js borrar -d "Pasear al perro"
```
