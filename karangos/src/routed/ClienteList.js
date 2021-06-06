import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useHistory } from 'react-router-dom';
import ConfirmDialog from '../ui/ConfirmDialog';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    dataGrid: {
        // Esconde os botões 
        '& .MuiDataGrid-row button': {
            visibility: 'hidden',
        },

        // Exibir os botões quando o mouse passar por cima
        '& .MuiDataGrid-row:hover button': {
            visibility: 'visible'
        },

    },
    toolbar: {
        justifyContent: 'flex-end',
        paddingRight: 0,
        margin: theme.spacing(2, 0)
    },

}));

export default function ClienteList() {
    const classes = useStyles();

    const history = useHistory()

    const [cliente, setCliente] = useState([])
    const [deletable, setDeletable] = useState()

    const [dialogOpen, setDialogOpen] = useState(false)

    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('SUCESSO')
    const [message, setMessage] = useState('CLIENTE EXCLUÍDO')


    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            let response = await axios.get('https://api.faustocintra.com.br/clientes?by=nome,cpf')
            if (response.data.length > 0) setCliente(response.data)
        }
        catch (error) {
            console.error(error);
        }
    }

    async function deleteCliente() {
        try {
            await axios.delete(`https://api.faustocintra.com.br/clientes/${deletable}`)
            getData()
            setSeverity('SUCESSO')
            setMessage('CLIENTE EXCLUÍDO')
        }
        catch (error) {
            setSeverity('error')
            setMessage('ERRO: ' + error.message)
        }
        setOpen(true)
    }

    function handleDialogClose(result) {
        setDialogOpen(false)

        //  Exclusão pelo usuário
        if (result) deleteCliente()
    }

    function handleDeleteClick(id) {
        setDeletable(id)
        setDialogOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerClassName: 'super-app-theme--header',
            headerName: 'ID',
            align: 'center',
            headerAlign: 'center',
            width: 90,
            sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
        },
        {
            field: 'nome',
            headerName: 'Nome',
            align: 'left',
            headerAlign: 'left',
            width: 150,
        },
        {
            field: 'cpf',
            headerName: 'CPF',
            align: 'left',
            headerAlign: 'left',
            width: 125,
            sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
        },
        {
            field: 'rg',
            headerName: 'RG',
            align: 'center',
            headerAlign: 'center',
            width: 125,
            sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
        },
        {
            field: 'logradouro',
            headerName: 'Logradouro',
            width: 160,
        },
        {
            field: 'num_imovel',
            headerName: 'Nº Imóvel',
            width: 90,
            sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
        },
        {
            field: 'complemento',
            headerName: 'Complemento',
            width: 150,
        },
        {
            field: 'bairro',
            headerName: 'Bairro',
            width: 120,
        },
        {
            field: 'municipio',
            headerName: 'Município',
            width: 150,
        },
        {
            field: 'uf',
            headerName: 'UF',
            width: 100,
        },
        {
            field: 'telefone',
            headerName: 'Telefone',
            width: 150,
            sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
        },
        {
            field: 'email',
            headerName: 'E-mail',
            width: 260,
        },
        {
            field: 'editar',
            headerName: 'Editar',
            align: 'center',
            headerAlign: 'center',
            width: 150,
            renderCell: params => (
                <IconButton aria-label="editar" onClick={() => history.push(`/editCliente/${params.id}`)}>
                    <EditIcon />
                </IconButton>
            )
        },
        {
            field: 'excluir',
            headerName: 'Excluir',
            align: 'center',
            headerAlign: 'center',
            width: 120,
            renderCell: params => (
                <IconButton aria-label="excluir" onClick={() => handleDeleteClick(params.id)}>
                    <DeleteIcon color="error" />
                </IconButton>
            )
        }
    ]

    return (
        <>
            <ConfirmDialog
                isOpen={dialogOpen}
                onClose={handleDialogClose}>
                Deseja excluir cliente?
            </ConfirmDialog>

            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}>
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleClose}
                    severity={severity}>
                    {message}
                </MuiAlert>
            </Snackbar>

            <h1>Cadastro de Cliente</h1>

            <Toolbar
                className={classes.toolbar}>
                <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    startIcon={<AddBoxIcon />}
                    onClick={() => history.push("/newCliente")}>
                    Novo Cliente
                </Button>
            </Toolbar>

            <Paper
                elevation={5} >
                <DataGrid
                    className={classes.dataGrid}
                    rows={cliente}
                    columns={columns}
                    pageSize={4}
                    autoHeight={true}
                    disableSelectionOnClick={true} />
            </Paper>
        </>
    )
}