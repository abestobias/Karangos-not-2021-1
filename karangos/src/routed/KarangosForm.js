import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles'
import { Button, Checkbox } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputMask from 'react-input-mask'
import InputAdornment from '@material-ui/core/InputAdornment'
import Toolbar from '@material-ui/core/Toolbar'
import axios from 'axios'



const useStyles = makeStyles(() => ({
    form: {
        maxWidth: '80%',
        margin: '0 auto',
        display: "flex",
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        '& .MuiFormControl-root': {
            minWidth: '200px',
            maxWidth: '500px',
            marginBottom: '24px',
        }
    },

    toolbar:{
        marginTop:'36px',
        width:'100%',
        display: 'flex',
        justifyContent:'spacearound'
    },
    checkbox:{
        alignItems:'center'
    }
}))

/* Classes de caracteres de entrada para a mascara do compo placa 
1 As tres primeiras posições qualquer letra de A a Z ( maiusculo ou minisculo) [A-za-z]
2 Posicoes numnericas 1ª 3ª 4ª depois do traço [0-9]
3 2ª posição apos o traco : pode receber digitos ou letras de A - J (maiusculas ou minusculas) [0-9A-Ja-a]
*/

//Representando as classes de caracteres da mascara como um objeto 

const formatChars = {
    'A': '[A-Za-z]',
    '0': '[0-9]',
    '#': '[0-9A-Ja-j]'
}

//finalmente a mascara de entrada 
const placaMask = 'AAA-0#00'

export default function KarangosForm() {

    const classes = useStyles()

    const [karango, setKarango] = useState({
        id: null,
        marca: '',
        modelo: '',
        cor: '',
        ano_fabricacao: (new Date()).getFullYear(),
        importado: '0',
        placa: '',
        preco: 0
    })

    const [currentId, setCurentId] = useState()
    const [importadoChecked, setImportadoChecked] = useState()

    function handleInputChange(event, property) {
        // Se nao houver id no event.target, ele será o nome da propriedade
        // senão, usaremos o valor do segundo parametro
        if (event.target.id) property = event.target.id

        if (property === 'importado') {
            const newState = !importadoChecked
            setKarango({ ...karango, importado: (newState ? '1' : '0') })
            setImportadoChecked(newState)
        }

        else if (property === 'placa') {
            setKarango({ ...karango, [property]: event.target.value.toUpperCase() })
        }
        else {
            // Quando o nome de uma propriedade de um objeto aparece entre [],
            // isso se chama "propriedade calculada". O nome da propriedade vai
            // corresponder a avaliação da expressão entre os colchetes
            setCurentId(event.target.id)
            setKarango({ ...karango, [property]: event.target.value })
        }
    }

    // function handleCorChange(event) {
    //     setKarango({...karango, cor:event.target.value})
    // }

    // function handleAnoChange(event) {
    //     setKarango({...karango, ano_fabricacao:event.target.value})
    // }

    function years() {
        let result = []
        for (let i = (new Date()).getFullYear(); i >= 1900; i--) {
            result.push(i)
        }
        return result
    }

async function saData(){
    try{
        await axios.post('https://api.faustocintra.com.br/karangos', karango)
        alert('Dados salvos com sucesso !')
    }
    catch(error){
        alert('ERRO:'+ error.message)
    }
}



    return (
        <>
            <h1>Cadastrar novo karango</h1>
            <form className={classes.form}>

                <TextField id="marca" label="Marca"
                    variant="filled" value={karango.marca} onChange={handleInputChange} fullWidth />

                <TextField id="modelo" label="Modelo"
                    variant="filled" value={karango.modelo} onChange={handleInputChange} fullWidth />

                <TextField id="cor" label="Cor"
                    variant="filled" value={karango.cor} onChange={event => handleInputChange(event, 'cor')} select fullWidth >
                    <MenuItem value='Amarelo'>Amarelo</MenuItem>
                    <MenuItem value='Azul'>Azul</MenuItem>
                    <MenuItem value='Branco'>Branco</MenuItem>
                    <MenuItem value='Cinza'>Cinza</MenuItem>
                    <MenuItem value='Dourado'>Dourado</MenuItem>
                    <MenuItem value='Laranja'>Laranja</MenuItem>
                    <MenuItem value='Prata'>Prata</MenuItem>
                    <MenuItem value='Preto'>Preto</MenuItem>
                    <MenuItem value='Roxo'>Roxo</MenuItem>
                    <MenuItem value='Verde'>Verde</MenuItem>
                    <MenuItem value='Vermelho'>Vermelho</MenuItem>
                </TextField>


                <TextField
                    id="ano_fabricacao"
                    label="Ano"
                    variant="filled"
                    value={karango.ano_fabricacao}
                    onChange={event => handleInputChange(event, 'ano_fabricacao')}
                    select
                    fullWidth
                >
                    {
                        years().map(year => <MenuItem value={year}>{year}</MenuItem>)
                    }
                </TextField>


                <FormControl fullWidth>

                    <TextField id="preco" label="Preço "
                        variant="filled" value={karango.preco} onChange={handleInputChange} fullWidth type="number"
                        onFocus={event => event.target.select()}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                        }}
                    />

                        
                    <InputMask formatChars={formatChars} mask={placaMask} id="placa"
                        onChange={event => handleInputChange(event, 'placa')}
                        value={karango.placa}>
                        {() => <TextField label="placa"
                            variant="filled" fullWidth />}
                    </InputMask>


                    <FormControlLabel className={classes.checkbox}
                        control={<Checkbox checked={importadoChecked} onChange={handleInputChange} id="importado" />}
                        label="Importado?"
                    />

                </FormControl>

                <Toolbar className={classes.toolbar}>
                    <Button variant="contained" color="secundary" type="submit" >Enviar</Button>
                    <Button variant="contained">Voltar</Button>

                </Toolbar>

            </form>
            <div>{JSON.stringify(karango)}
            
                <br />
                currentId:{currentId}

            </div>
        </>
    )
}