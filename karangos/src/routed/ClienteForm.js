import React from 'react';
import { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputMask from 'react-input-mask';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory, useParams } from 'react-router-dom';
import ConfirmDialog from '../ui/ConfirmDialog';
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles(() => ({
    form: {
        maxWidth: '80%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        '& .MuiFormControl-root': {
            minWidth: '200px',
            maxWidth: '500px',
            marginBottom: '24px'
        }
    },
    toolbar: {
        marginTop: '36px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
    },
    checkbox: {
        alignItems: 'center'
    }
}))

const formatChars = {
    'x': '[0-9]',
}

const mascaraCPF = 'xxx.xxx.xxx-xx'
const mascaraRG = 'xx.xxx.xxx-x'
const mascaraTelefone = '(xx)-xxxx-xxxx'

export default function ClienteForm() {

    const classes = useStyles()

    const [cliente, setCliente] = useState({
        id: null,
        nome: '',
        cpf: '',
        rg: '',
        logradouro: '',
        num_imovel: '',
        complemento: '',
        bairro: '',
        municipio: '',
        uf: '',
        telefone: '',
        email: '',
    })
    const [snackState, setSnackState] = useState({
        open: false,
        severity: 'SUCESSO',
        message: 'CLIENTE SALVO'
    })

    const [btnSendState, setBtnSendState] = useState({
        disabled: false,
        label: 'Enviar'
    })

    const [error, setError] = useState({
        nome: '',
        cpf: '',
        rg: '',
        logradouro: '',
        num_imovel: '',
        complemento: '',
        bairro: '',
        municipio: '',
        uf: '',
        telefone: '',
        email: ''
    })

    const [isModified, setIsModified] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [title, setTitle] = useState('Cadastro Cliente')

    const history = useHistory()
    const params = useParams()

    useEffect(() => {

        // Verificac se tem o par??metro id na rota. Se tiver, temos que buscar
        // os dados do registro no back-end para edi????o
        if (params.id) {
            setTitle('Editando Cliente')
            getData(params.id)
        }
    }, [])

    async function getData(id) {
        try {
            let response = await axios.get(`https://api.faustocintra.com.br/clientes/${id}`)
            setCliente(response.data)
        }
        catch (error) {
            setSnackState({
                open: true,
                severity: 'error',
                message: 'N??o foi poss??vel carregar os dados'
            })
        }
    }
    function handleInputChange(event, property) {

        const clienteTemp = { ...cliente }

        if (event.target.id) property = event.target.id

        if ((property === 'cpf') || (property === 'rg') || (property === 'complemento') || (property === 'uf') || (property === 'telefone')) {
            clienteTemp[property] = event.target.value
        }

        else clienteTemp[property] = event.target.value

        setCliente(clienteTemp)
        setIsModified(true)
        validate(clienteTemp)
    }

    // valida????o dos campos
    function validate(data) {
        const errorTemp = {
            nome: '',
            cpf: '',
            rg: '',
            logradouro: '',
            num_imovel: '',
            complemento: '',
            bairro: '',
            municipio: '',
            uf: '',
            telefone: '',
            email: ''
        }
        let isValid = true

        // Validar nome
        if (data.nome.trim() === '') {     // trim(): retira os espa??os em branco do n??cio e do final de uma string
            errorTemp.nome = 'Digitar um Nome v??lido'
            isValid = false
        }

        // Validar cpf
        if (data.cpf.trim() === '' || data.cpf.includes('_')) {
            errorTemp.cpf = 'Digitar um CPF v??lido'
            isValid = false
        }

        // Validar rg
        if (data.rg.trim() === '' || data.rg.includes('_')) {
            errorTemp.rg = 'Digitar um RG v??lido'
            isValid = false
        }

        // Validar logradouro
        if (data.logradouro.trim() === '') {
            errorTemp.logradouro = 'Escolha um Logradouro'
            isValid = false
        }

        // Validar complemento
        if (data.complemento.trim() === '') {
            errorTemp.complemento = 'Digitar um valor v??lido'
            isValid = false
        }

        // Validar bairro
        if (data.bairro.trim() === '') {
            errorTemp.bairro = 'Digitar um valor v??lido'
            isValid = false
        }

        // Validar munic??pio
        if (data.municipio.trim() === '') {
            errorTemp.municipio = 'Digitar um valor v??lido'
            isValid = false
        }

        // Validar uf
        if (data.uf.trim() === '') {
            errorTemp.uf = 'Escolha um UF'
            isValid = false
        }

        // Validar telefone
        if (data.telefone.trim() === '') {
            errorTemp.telefone = 'Digitar um telefone v??lido'
            isValid = false
        }
        // Validar N??mero
        if (Number(data.num_imovel) <= 0) {
            errorTemp.num_imovel = 'Digitar um valor v??lido'
            isValid = false
        }
        // Validar email
        if (data.email.length <= 5 || data.email.trim() === '' || !data.email.includes('@')) {
            errorTemp.email = 'O e-mail deve ser preenchido corretemente'
            isValid = false
        }

        setError(errorTemp)
        return isValid
    }


    //Salvar dados do Cliente
    async function saveData() {
        try {
            // Desabilitar o bot??o Enviar
            setBtnSendState({ disabled: true, label: 'Enviando...' })

            // Se o registro j?? existe (edi????o)
            if (params.id) {
                await axios.put(`https://api.faustocintra.com.br/clientes/${params.id}`, cliente)
            }
            // Registro n??o existe, cria um novo (verbo HTTP POST)
            else {
                await axios.post(`https://api.faustocintra.com.br/clientes`, cliente)
            }
            //alert('Dados salvos com sucesso!')
            setSnackState({
                open: true,
                severity: 'success',
                message: 'Cliente salvo com sucesso!'
            })
            // A FAZER: retornar ?? p??gina de listagem
        }
        catch (error) {

            setSnackState({
                open: true,
                severity: 'error',
                message: 'ERRO: ' + error.message
            })
        }
        // Retoma bot??o Enviar
        setBtnSendState({ disabled: false, label: 'Enviar' })
    }

    function handleSubmit(event) {

        event.preventDefault()   // Segura o recarregamento da p??gina
        if (validate(cliente)) saveData()
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function handleSnackClose(event, reason) {

        if (reason === 'clickway') return // Evita que Snackbar feche
        setSnackState({ ...snackState, open: false })  // Fecha a Snackbar
        history.push('/listCliente') // Retorna a pagina????o
    }

    function handleDialogClose(result) {
        setDialogOpen(false)
        if (result) history.push('/listCliente') // voltar
    }

    function handleGoBack() {
        if (isModified) setDialogOpen(true) // Mostrar di??logo de confirma????o
        else history.push('/listCliente') // Voltar
    }

    return (
        <>
            <ConfirmDialog
                isOpen={dialogOpen}
                onClose={handleDialogClose}>
                Deseja sair desta p??gina ?
            </ConfirmDialog>

            <Snackbar
                open={snackState.open}
                autoHideDuration={6000}
                onClose={handleSnackClose}>
                <Alert
                    onClose={handleSnackClose}
                    severity={snackState.severity}>
                    {snackState.message}
                </Alert>
            </Snackbar>

            <h1>{title}</h1>

            <form className={classes.form} onSubmit={handleSubmit} >

                <TextField
                    className={classes.textfield}
                    id="nome"
                    label="Nome"
                    variant="filled"
                    value={cliente.nome}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    error={error.nome !== ''}
                    helperText={error.nome} />

                <InputMask
                    formatChars={formatChars}
                    mask={mascaraCPF}
                    id="cpf"
                    value={cliente.cpf}
                    onChange={event => handleInputChange(event, 'cpf')}>
                    {() => <TextField
                        className={classes.textfield}
                        label="CPF"
                        variant="filled"
                        fullWidth
                        required
                        error={error.cpf !== ''}
                        helperText={error.cpf} />}
                </InputMask>

                <InputMask
                    formatChars={formatChars}
                    mask={mascaraRG}
                    id="rg"
                    value={cliente.rg}
                    onChange={event => handleInputChange(event, 'rg')}>
                    {() => <TextField
                        className={classes.textfield}
                        label="RG"
                        variant="filled"
                        fullWidth
                        required
                        error={error.rg !== ''}
                        helperText={error.rg} />}
                </InputMask>

                <TextField
                    className={classes.textfield}
                    id="logradouro"
                    label="Logradouro"
                    variant="filled"
                    value={cliente.logradouro}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    error={error.logradouro !== ''}
                    helperText={error.logradouro} />

                <TextField
                    className={classes.textfield}
                    id="num_imovel"
                    label="N??mero Im??vel"
                    variant="filled"
                    value={cliente.num_imovel}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    error={error.num_imovel !== ''}
                    helperText={error.num_imovel} />

                <TextField
                    className={classes.textfield}
                    id="complemento"
                    label="Complemento"
                    variant="filled"
                    value={cliente.complemento}
                    onChange={handleInputChange}
                    fullWidth  
                    required
                    error={error.complemento !== ''}
                    helperText={error.complemento} >

                </TextField>

                <TextField
                    className={classes.textfield}
                    id="bairro"
                    label="Bairro"
                    variant="filled"
                    value={cliente.bairro}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    error={error.bairro !== ''}
                    helperText={error.bairro} />

                <TextField
                    className={classes.textfield}
                    id="municipio"
                    label="Munic??pio"
                    variant="filled"
                    value={cliente.municipio}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    error={error.municipio !== ''}
                    helperText={error.municipio} />

                <TextField
                    className={classes.textfield}
                    id="uf"
                    label="UF"
                    variant="filled"
                    value={cliente.uf}
                    onChange={event => handleInputChange(event, 'uf')}
                    select fullWidth
                    required
                    error={error.uf !== ''}
                    helperText={error.uf} >
                    <MenuItem value="Acre">Acre</MenuItem>
                    <MenuItem value="Alagoas">Alagoas</MenuItem>
                    <MenuItem value="Amap??">Amap??</MenuItem>
                    <MenuItem value="Amazonas">Amazonas</MenuItem>
                    <MenuItem value="Bahia">Bahia</MenuItem>
                    <MenuItem value="Cear??">Cear??</MenuItem>
                    <MenuItem value="Distrito Federal">Distrito Federal</MenuItem>
                    <MenuItem value="Esp??rito Santo">Esp??rito Santo</MenuItem>
                    <MenuItem value="Goi??s">Goi??s</MenuItem>
                    <MenuItem value="Maranh??o">Maranh??o</MenuItem>
                    <MenuItem value="Mato Grosso">Mato Grosso</MenuItem>
                    <MenuItem value="Mato Grosso do Sul">Mato Grosso do Sul</MenuItem>
                    <MenuItem value="Minas Gerais">Minas Gerais</MenuItem>
                    <MenuItem value="Par??">Par??</MenuItem>
                    <MenuItem value="Para??ba">Para??ba</MenuItem>
                    <MenuItem value="Paran??">Paran??</MenuItem>
                    <MenuItem value="Pernambuco">Pernambuco</MenuItem>
                    <MenuItem value="Piau??">Piau??</MenuItem>
                    <MenuItem value="Rio de Janeiro">Rio de Janeiro</MenuItem>
                    <MenuItem value="Rio Grande do Norte">Rio Grande do Norte</MenuItem>
                    <MenuItem value="Rio Grande do Sul">Rio Grande do Sul</MenuItem>
                    <MenuItem value="Rond??nia">Rond??nia</MenuItem>
                    <MenuItem value="Roraima">Roraima</MenuItem>
                    <MenuItem value="Santa Catarina">Santa Catarina</MenuItem>
                    <MenuItem value="S??o Paulo">S??o Paulo</MenuItem>
                    <MenuItem value="Sergipe">Sergipe</MenuItem>
                    <MenuItem value="Tocantins">Tocantins</MenuItem>
                </TextField>

                <InputMask
                    formatChars={formatChars}
                    mask={mascaraTelefone}
                    id="telefone"
                    value={cliente.telefone}
                    onChange={event => handleInputChange(event, 'telefone')}>
                    {() => <TextField
                        className={classes.textfield}
                        label="Telefone"
                        variant="filled"
                        fullWidth
                        required
                        error={error.telefone !== ''}
                        helperText={error.telefone} />}
                </InputMask>

                <TextField
                    className={classes.textfield}
                    id="email"
                    label="E-mail"
                    variant="filled"
                    value={cliente.email.toLowerCase()}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    error={error.email !== ''}
                    helperText={error.email} />
                <Toolbar
                    className={classes.toolbar} >
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        disabled={btnSendState.disabled} >

                        {btnSendState.label}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleGoBack} >
                        Voltar
                    </Button>
                </Toolbar>
            </form>
        </>
    )
}












