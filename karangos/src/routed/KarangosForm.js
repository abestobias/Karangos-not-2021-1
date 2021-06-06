import React from 'react';
import { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControl, FormControlLabel, Toolbar } from '@material-ui/core';
import InputMask from 'react-input-mask';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory, useParams } from 'react-router-dom';
import ConfirmDialog from '../ui/ConfirmDialog';

const useStyles = makeStyles(() => ({
    form: {
        //backgroundColor: 'green',  // Cor de debug
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

/* 
Classes de caracteres de entrada para a máscara do campo placa
    1) Três primeiras posições: qualquer letra, de A a Z (maiúsculo ou minúsculo) ~> [A-Za-z]
    2) Posições numéricas (1ª, a 3ª e a 4ª depois do traço) ~> [0-9]
    3) 2ª posição após o traço: pode receber dígitos ou letras de A a J (maiúsculas ou minúsculas) ~> [0-9A-Ja-j]
*/

// Representando as classes de caracteres da máscara como um objeto
const formatChars = {
    'A': '[A-Za-z]',
    '0': '[0-9]',
    '#': '[0-9A-Ja-j]'
}

// Finalmente, a máscara de entrada do campo placa
const placaMask = 'AAA-0#00'

// Máscara para CPF: '000.000.000-00'
// Máscara para CNPJ: '00.000.000/0000-00'


export default function KarangosForm() {

    const classes = useStyles()

    const [karango, setKarango] = useState({
        id: null,
        marca: '',
        modelo: '',
        cor: '',
        ano_fabricacao: (new Date()).getFullYear(),  // Ano corrente
        importado: '0',
        placa: '',
        preco: 0
    })

    // const [currentId, setCurrentId] = useState()
    const [importadoChecked, setImportadoChecked] = useState()

    const [snackState, setSnackState] = useState({
        open: false,
        severity: 'success',
        message: 'Karango salvo com sucesso.'
    })

    const [btnSendState, setBtnSendState] = useState({
        disabled: false,
        label: 'Enviar'
    })

    const [error, setError] = useState({
        marca: '',
        modelo: '',
        cor: '',
        placa: '',
        preco: ''
    })

    const [isModified, setIsModified] = useState(false)

    const [dialogOpen, setDialogOpen] = useState(false) // O diálogo de confirmação está aberto?

    const [title, setTitle] = useState('Cadastrar Karango')

    const history = useHistory()
    const params = useParams()

    useEffect(() => {

        // Verificac se tem o parâmetro id na rota. Se tiver, temos que buscar
        // os dados do registro no back-end para edição
        if (params.id) {
            setTitle('Editando Karango')
            getData(params.id)
        }
    }, [])

    async function getData(id) {
        try {
            let response = await axios.get(`https://api.faustocintra.com.br/karangos/${id}`)
            setKarango(response.data)
        }
        catch (error) {
            setSnackState({
                open: true,
                severity: 'error',
                message: 'Não foi possível carregar os dados para edição.'
            })
        }
    }

    function handleInputChange(event, property) {

        const karangoTemp = { ...karango }
        let importadoCheckedTemp = importadoChecked

        // Se houver id no event.target, ele será o nome da propriedade
        // senão, usaremos o valor do segundo parâmetro
        if (event.target.id) property = event.target.id

        if (property === 'importado') {
            const newState = !importadoChecked
            //setKarango({ ...karango, importado: (newState ? '1' : '0') })
            karangoTemp.importado = (newState ? '1' : '0')

            //setImportadoChecked(newState)
            importadoCheckedTemp = newState
        }
        else if (property === 'placa') {
            //setKarango({ ...karango, [property]: event.target.value.toUpperCase() })
            karangoTemp[property] = event.target.value.toUpperCase()
        }
        else karangoTemp[property] = event.target.value
        // Quando o nome de uma propriedade de um objeto aparece entre [],
        // isso se chama "propriedade calculada". O nome da propriedade vai
        // corresponder à avaliação da expressão entre os colchetes
        //setCurrentId(event.target.id)
        //setKarango({ ...karango, [property]: event.target.value })
        setKarango(karangoTemp)
        setImportadoChecked(importadoCheckedTemp)
        setIsModified(true)   // O formulário foi modificado
        validate(karangoTemp)       // Dispara a validação
    }

    function validate(data) {

        const errorTemp = {
            marca: '',
            modelo: '',
            cor: '',
            placa: '',
            preco: ''
        }
        let isValid = true

        // Validação do campo marca
        if (data.marca.trim() === '') {     // trim(): retira os espaços em branco do nício e do final de uma string
            errorTemp.marca = 'A marca deve ser preenchida'
            isValid = false
        }

        // Validação do campo modelo
        if (data.modelo.trim() === '') {     // trim(): retira os espaços em branco do nício e do final de uma string
            errorTemp.modelo = 'A modelo deve ser preenchido'
            isValid = false
        }

        // Validação do campo cor
        if (data.cor.trim() === '') {     // trim(): retira os espaços em branco do nício e do final de uma string
            errorTemp.cor = 'Escolha uma cor'
            isValid = false
        }

        // Validação do campo placa
        // valor válido não pode ser string vazia e nem conter o caracter _ (sublinhado)
        if (data.placa.trim() === '' || data.placa.includes('_')) {     // trim(): retira os espaços em branco do nício e do final de uma string
            errorTemp.placa = 'A placa deve ser corretamente preenchida'
            isValid = false
        }

        // Validação do campo preco
        if (isNaN(data.preco) || Number(data.preco) <= 0) {     // trim(): retira os espaços em branco do nício e do final de uma string
            errorTemp.preco = 'O preço deve ser preenchido e maior que zero'
            isValid = false
        }

        setError(errorTemp)
        return isValid

    }

    function years() {
        let result = []
        for (let i = (new Date()).getFullYear(); i >= 1900; i--) result.push(i)
        return result
    }

    async function saveData() {
        try {
            // Desabilitar o botão Enviar
            setBtnSendState({ disabled: true, label: 'Enviando...' })

            // Se o registro já existe (edição)
            if (params.id) {
                await axios.put(`https://api.faustocintra.com.br/karangos/${params.id}`, karango)
            }
            // Registro não existe, cria um novo (verbo HTTP POST)
            else {
                await axios.post(`https://api.faustocintra.com.br/karangos`, karango)
            }
            //alert('Dados salvos com sucesso!')
            setSnackState({
                open: true,
                severity: 'success',
                message: 'Karango salvo com sucesso!'
            })
        }
        catch (error) {
            //alert('ERRO: ' + error.message)
            setSnackState({
                open: true,
                severity: 'error',
                message: 'ERRO: ' + error.message
            })
        }
        // Reabilita o botão Enviar
        setBtnSendState({ disabled: false, label: 'Enviar' })
    }

    function handleSubmit(event) {

        event.preventDefault()   // Evitar o recarregamento da página

        // Só salva os dados se forem válidos
        if (validate(karango)) saveData()

    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function handleSnackClose(event, reason) {
        // Evita que a Snackbar seja fechada clicando-se fora dela
        if (reason === 'clickway') return
        setSnackState({ ...snackState, open: false })  // Fecha a Snackbar

        // Retorna à página de listagem
        history.push('/list')
    }

    function handleDialogClose(result) {
        setDialogOpen(false)

        // Se o usuário concordou em voltar 
        if (result) history.push('/list')
    }

    function handleGoBack() {

        // Se o formulário estiver modificado, mostramos o diálogo de confirmação
        if (isModified) setDialogOpen(true)

        // Senão, voltamos diretamente à de listagem
        else history.push('/list')
    }

    return (
        <>
            <ConfirmDialog
                isOpen={dialogOpen}
                onClose={handleDialogClose}>
                Há dados não salvos. Deseja realmente voltar?
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

            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    id="marca"
                    label="Marca"
                    variant="filled"
                    value={karango.marca}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    error={error.marca !== ''}
                    helperText={error.marca}
                />

                <TextField
                    id="modelo"
                    label="Modelo"
                    variant="filled"
                    value={karango.modelo}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    error={error.modelo !== ''}
                    helperText={error.modelo}
                />

                <TextField
                    id="cor"
                    label="Cor"
                    variant="filled"
                    value={karango.cor}
                    onChange={event => handleInputChange(event, 'cor')}
                    select fullWidth
                    required
                    error={error.cor !== ''}
                    helperText={error.cor} >
                    <MenuItem value="Amarelo">Amarelo</MenuItem>
                    <MenuItem value="Azul">Azul</MenuItem>
                    <MenuItem value="Bege">Bege</MenuItem>
                    <MenuItem value="Branco">Branco</MenuItem>
                    <MenuItem value="Cinza">Cinza</MenuItem>
                    <MenuItem value="Dourado">Dourado</MenuItem>
                    <MenuItem value="Laranja">Laranja</MenuItem>
                    <MenuItem value="Marrom">Marrom</MenuItem>
                    <MenuItem value="Prata">Prata</MenuItem>
                    <MenuItem value="Preto">Preto</MenuItem>
                    <MenuItem value="Roxo">Roxo</MenuItem>
                    <MenuItem value="Verde">Verde</MenuItem>
                    <MenuItem value="Vermelho">Vermelho</MenuItem>
                </TextField>

                <TextField
                    id="ano_fabricacao"
                    label="Ano de Fabricação"
                    variant="filled"
                    value={karango.ano_fabricacao}
                    onChange={event => handleInputChange(event, 'ano_fabricacao')}
                    select fullWidth >
                    {years().map(year => <MenuItem value={year} key={year}>{year}</MenuItem>)}
                </TextField>

                <TextField
                    id="preco"
                    label="Preço"
                    variant="filled"
                    value={karango.preco}
                    onChange={handleInputChange}
                    fullWidth type="number"
                    onFocus={event => event.target.select()}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                    }}
                    required
                    error={error.preco !== ''}
                    helperText={error.preco}
                />

                <InputMask
                    formatChars={formatChars}
                    mask={placaMask}
                    id="placa"
                    onChange={event => handleInputChange(event, 'placa')}
                    value={karango.placa} >
                    {() => <TextField
                        label="Placa"
                        variant="filled"
                        fullWidth
                        required
                        error={error.placa !== ''}
                        helperText={error.placa}
                    />}
                </InputMask>

                <FormControl
                    className={classes.checkbox}
                    fullWidth >
                    <FormControlLabel
                        control={<Checkbox checked={importadoChecked}
                            onChange={handleInputChange} id="importado" />}
                        label="Importado?" />
                </FormControl>

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

                {/* <div>{JSON.stringify(karango)}<br />currentId: {currentId}</div> */}
            </form>
        </>
    )
}
