const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
// const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');

const fs = require('fs');
const sharp = require('sharp');

const bodyParser = require('body-parser');
const app = express();
const port = 3001;


app.use(bodyParser.json({
    limit: '9999999mb'
})); // Este middleware analisa o corpo da solicitação como JSON

app.use(
    cors({
        origin: '*', // permite todos os domínios
    })
);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, api-key');
    next();
});

const configuration = new Configuration({
    organization: process.env.ORGANIZATION_ID,
    apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

// Conexão com o banco de dados
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const collectionName = process.env.MONGODB_COLLECTION_NAME;

// Definição da função generateId
function generateId() {
    return crypto.randomBytes(16).toString('hex');
}

// Realiza a busca de acordo com o número do usuário
app.get('/findByPhone/:phone', async (req, res) => {
    const phone = req.params.phone;

    try {
        await client.connect();

        const database = client.db(process.env.MONGODB_DB_NAME);
        const collection = database.collection(collectionName);

        const result = await collection.findOne({ phone: phone });

        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send('Registro não encontrado');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
    }
});

// Realiza a busca de acordo com o nome do usuário
app.get('/findByName/:name', async (req, res) => {
    const name = req.params.name;

    try {
        await client.connect();

        const database = client.db(process.env.MONGODB_DB_NAME);
        const collection = database.collection(collectionName);

        const result = await collection.findOne({ name: name.replace(/-/g, ' ') });

        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send('Registro não encontrado');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
    }
});

// Realiza a busca de acordo com o nome convertido do usuário
app.get('/findByConvertedName/:convertedName', async (req, res) => {
    const name = req.params.name;
    const convertedName = req.params.convertedName;

    try {
        await client.connect();

        const database = client.db(process.env.MONGODB_DB_NAME);
        const collection = database.collection(collectionName);

        const result = await collection.findOne({ convertedName: convertedName });

        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send('Registro não encontrado');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
    }
});

// Realiza o envio das fotos para o objeto photos presente no mongoDB
app.post("/upload", async (req, res) => {
    const phone = req.body.phone;
    const photoPosition = req.body.photo_position;
    const base64 = req.body.base64;
    const photoType = req.body.type;

    // Make sure all payload is present
    if (!phone || !photoPosition || !base64 || !photoType) {
        res.status(400).send({ error: 'Invalid payload' });
        return;
    }

    try {
        await client.connect()
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(collectionName)

        const actualData = await collection.findOne({ phone });

        if (photoPosition === "1" || photoPosition === 1) {
            await collection.updateOne(
                { phone: phone },
                {
                    $set: {
                        photos: {
                            ...actualData.photos,
                            photo1: {
                                base64: base64,
                                type: photoType
                            }
                        }
                    }
                },
            );
        }

        if (photoPosition === "2" || photoPosition === 2) {
            await collection.updateOne(
                { phone: phone },
                {
                    $set: {
                        photos: {
                            ...actualData.photos,
                            photo2: {
                                base64: base64,
                                type: photoType
                            }
                        }
                    }
                },
            );
        }

        if (photoPosition === "3" || photoPosition === 3) {
            await collection.updateOne(
                { phone: phone },
                {
                    $set: {
                        photos: {
                            ...actualData.photos,
                            photo3: {
                                base64: base64,
                                type: photoType
                            }
                        }
                    }
                },
            );
        }

        // Logomarca
        if (photoPosition === "4" || photoPosition === "logo") {
            await collection.updateOne(
                { phone: phone },
                {
                    $set: {
                        photos: {
                            ...actualData.photos,
                            logo: {
                                base64: base64,
                                type: photoType
                            }
                        }
                    }
                },
            );
        }

        // Foto da agenda
        if (photoPosition === "5" || photoPosition === "schedules" || photoPosition === 5) {
            await collection.updateOne(
                { phone: phone },
                {
                    $set: {
                        photos: {
                            ...actualData.photos,
                            schedules: {
                                base64: base64,
                                type: photoType
                            }
                        }
                    }
                },
            );
        }
        res.status(200).send({ status: 'deu certo' });
    } catch (err) {
        res.status(500).send({ error: 'Erro interno do servidor' });
    } finally {
    }
})

// Realiza a o preenchimento do enderenço que o usuário forneceu
app.post("/fillAddress", async (req, res) => {

    const phone = req.body.phone;

    const zipCode = req.body.zip_code;
    const street = req.body.street;
    const number = req.body.number;
    const complement = req.body.complement;
    const city = req.body.city;
    const state = req.body.state;
    const neighborhood = req.body.neighborhood;

    if (
        !zipCode || !street || !number || !city || !state || !phone
    ) {
        res.status(400).send({
            error: 'Invalid payload',
            data: {
                phone: phone,
                zip_code: zipCode,
                street: street,
                number: number,
                complement: complement,
                city: city,
                state: state,
                neighborhood: neighborhood,
            },
        });
        return;
    }

    try {
        const db = client.db(process.env.MONGODB_DB_NAME);
        await db.collection(process.env.MONGODB_COLLECTION_NAME).findOneAndUpdate(
            { phone: phone },
            {
                $set: {
                    address: {
                        zipCode: zipCode,
                        street: street,
                        number: number,
                        complement: complement,
                        city: city,
                        state: state,
                        neighborhood: neighborhood,
                    },
                }
            },
        );
        res.status(200).send({ status: 'deu certo' });

    } catch (err) {
        console.error('deu erro: ', err);
        res.status(500).send('Erro interno do servidor');
    }
})

// Atualiza as cores do site do usuário
app.post('/updateColor', async (req, res) => {
    const phone = req.body.phone;
    const mainColor = req.body.mainColor;
    const secondaryColor = req.body.secondaryColor;
    const accentColor = req.body.accentColor;

    try {
        const db = client.db(process.env.MONGODB_DB_NAME);
        await db.collection(process.env.MONGODB_COLLECTION_NAME).findOneAndUpdate(
            { phone: phone },
            {
                $set: {
                    mainColor: mainColor,
                    secondaryColor: secondaryColor,
                    accentColor: accentColor
                }
            }
        );
        res.status(200).send({ status: 'deu certo' });

    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'erro ao atualizar os dados' });
    } finally {
        await client.close();
    }
});

// Função para obter a resposta do modelo GPT da OpenAI
const getDavinciResponse = async (clientText) => {
    const options = {
        model: "text-davinci-003", // Modelo GPT a ser usado
        prompt: clientText, // Texto enviado pelo usuário
        temperature: 0.7, // Nível de variação das respostas geradas, 1 é o máximo
        max_tokens: 3000 // Quantidade de tokens (palavras) a serem retornadas pelo bot, 4000 é o máximo
    }

    try {
        const response = await openai.createCompletion(options)
        let botResponse = ""
        response.data.choices.forEach(({ text }) => {
            botResponse += text
        })
        return `${botResponse.trim()}`
    } catch (e) {
        return `Ops. Tivemos um probleminha ao criar esse texto. Entre em contato com o suporte`
    }
}

app.get('/image/:id', async (req, res) => {
    const id = req.body.phone;
    // const phone = req.params.phone;

    try {
        await client.connect();
        const database = client.db(process.env.MONGODB_DB_NAME);
        const collection = database.collection(collectionName);

        collection.findOne({ phone: id }, (err, document) => {
            if (err) {
                return res.status(500).send('Erro ao buscar documento');
            }

            if (!document) {
                return res.status(404).send('Documento não encontrado');
            }
            // Obtém a imagem a partir do objeto "photos"
            const imagem = document.photos.photo1;
            const buffer = Buffer.from(imagem.base64, 'base64');

            // Converte a imagem para o formato .webp utilizando a biblioteca sharp
            sharp(buffer).toFormat('webp').toBuffer((err, webpData) => {
                if (err) {
                    return res.status(500).send('Erro ao converter imagem para webp');
                }
                // Retorna a imagem em formato .webp
                res.set('Content-Type', 'image/webp');
                res.send(webpData);
            });
        });

    } catch (error) {
        res.status(500).send('Fuén, deu erro')
    }

}

);

async function exibirImagem(req, res) {
    const phone = req.params.phone;

    await client.connect();

    try {
        const database = client.db(process.env.MONGODB_DB_NAME);
        const collection = database.collection(process.env.MONGODB_COLLECTION_NAME);

        const imagem = await collection.findOne({ phone: phone });

        if (!imagem) {
            return res.status(404).send('Imagem não encontrada');
        }

        const imagemBase64 = imagem.photos.photo1.base64;
        const buffer = Buffer.from(imagemBase64.split(',')[1], 'base64');
        const imageType = imagem.photos.photo1.type;

        let sharpImage;

        switch (imageType) {
            case 'image/png':
                sharpImage = sharp(buffer).png();
                break;
            case 'image/jpeg':
                sharpImage = sharp(buffer).jpeg();
                break;
            case 'image/webp':
                sharpImage = sharp(buffer);
                break;
            default:
                return res.status(400).send('Tipo de imagem não suportado');
        }
        const imagemWebP = await sharpImage.webp().toBuffer();

        res.set('Content-Type', 'image/webp');
        res.send(imagemWebP);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao exibir imagem');
    } finally {
        client.close();
    }
}

app.get('/imagem/:phone', exibirImagem);

// Rota para inserir um documento no MongoDB
app.post('/getName', async (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const origin = req.body.origin;


    const convertedName = name.toLowerCase().replace(/ç/g, 'c').replace(/\s+/g, '-').replace(/\./g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    try {
        await client.connect();
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(collectionName);

        // Documento a ser inserido
        const doc = {
            photos: {
                photo1: {
                    base64: '',
                    type: ''
                },
                photo2: {
                    base64: '',
                    type: ''
                },
                photo3: {
                    base64: '',
                    type: ''
                },
                logo: {
                    base64: '',
                    type: ''
                },
                schedules: {
                    base64: '',
                    type: ''
                },
            },
            segunda: '',
            terca: '',
            quarta: '',
            quinta: '',
            sexta: '',
            sabado: '',
            domingo: '',
            qualitydescription1: '',
            qualitydescription2: '',
            qualitydescription3: '',
            quality1: '',
            quality2: '',
            quality3: '',
            history: '',
            call: '',
            phone: phone,
            name: name.replace(/[\r\n]+/gm, ";"),
            convertedName: convertedName,
            address: {
                zipCode: '',
                street: '',
                number: '',
                complement: '',
                city: '',
                state: '',
                neighborhood: '',
            },
            color: '',
            whatsApp: '',
            isAutonomous: '',
            mainColor: '',
            secondaryColor: '',
            accentColor: '',
            isPayer: '',
            origin: origin,
            instagram: '',
            isFourthSecVisible: 'on',

            id: generateId(),
        };

        // Inserção do documento na coleção
        const result = await collection.insertOne(doc);

        res.status(200).send({ status: 'deu certo' });
    } catch (err) {
        res.status(500).send({ status: 'erro' });
    } finally {
        // Fechando a conexão com o banco de dados
        await client.close();
    }
});

// Rota para atualizar o campo "call" do documento "store" no MongoDB
app.post('/getCall', async (req, res) => {
    const call = req.body.call;
    const phone = req.body.phone;

    let botResponse = await getDavinciResponse(call);
    botResponse = botResponse.replace(/\.\s/g, '');

    try {
        // await client.connect();
        const db = client.db(process.env.MONGODB_DB_NAME);
        await db.collection(process.env.MONGODB_COLLECTION_NAME).findOneAndUpdate(

            { phone: phone },
            {
                $set: {
                    call: botResponse,
                },
            }
        );
        res.status(200).send({ status: 'deu certo' });

    } catch (error) {
        console.error('erro na call: ', error);
        res.status(500).send({ error: 'Ocorreu um erro ao atualizar o documento' });
    }
});



// Recebe '1' do manychat e envia para o bd
app.post('/getAutonomous', async (req, res) => {
    const phone = req.body.phone;
    const isAutonomous = req.body.isAutonomous;

    try {
        const db = client.db(process.env.MONGODB_DB_NAME)
        await db.collection(process.env.MONGODB_COLLECTION_NAME).updateOne(
            { phone: phone },
            {
                $set: {
                    isAutonomous: isAutonomous
                },
            }
        );
        res.status(200).send({ status: 'deu certo' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'erro ao atualizar autonomous' });
    }
});

app.post('/getColorPalette', async (req, res) => {
    const colorPalette = req.body.colorPalette;
    const phone = req.body.phone;

    try {

        const botResponse = await getDavinciResponse(colorPalette);

        if (!botResponse) {
            return res.status(500).send({ error: 'Não recebeu informação da IA' });
        }

        const { mainColor, secondaryColor, accentColor } = parseColorPalette(botResponse);

        await updateColorPaletteInDatabase(phone, mainColor, secondaryColor, accentColor);

        return res.status(200).send({ status: 'deu certo' });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Erro interno do servidor' });
    }
});

function parseColorPalette(botResponse) {
    const lines = botResponse.split('\n');
    const mainColor = getValueFromLine(lines[0]);
    const secondaryColor = getValueFromLine(lines[1]);
    const accentColor = getValueFromLine(lines[2]);

    return { mainColor, secondaryColor, accentColor };
}

function getValueFromLine(line) {
    if (line === undefined) {
        return '';
    }

    const match = line.match(/#(?:[0-9a-fA-F]{3}){1,2}/g);
    return match ? match[0] : '';
}

async function updateColorPaletteInDatabase(phone, mainColor, secondaryColor, accentColor) {
    try {
        await client.connect();
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(process.env.MONGODB_COLLECTION_NAME);

        const result = await collection.updateOne(
            { phone },
            {
                $set: {
                    mainColor,
                    secondaryColor,
                    accentColor,
                },
            }
        );

    } catch (error) {
        console.error(error);
        throw new Error('Erro ao atualizar a paleta de cores no banco de dados');
    }
}


//UNSPLASH COVER PHOTO
app.post('/getCoverPhotoKeyWords', async (req, res) => {
    const coverKeyWords = req.body.coverKeyWords;
    const phone = req.body.phone;

    try {
        const botResponse = await getDavinciResponse(coverKeyWords);

        await client.connect();
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(process.env.MONGODB_COLLECTION_NAME);

        if (!botResponse) {
            res.status(500).send({ error: 'Não recebeu informação da IA' });
        } else {

            const query = botResponse.replace(/ /g, '-');

            // Atualização do documento na coleção
            const result = await collection.updateOne(
                { phone: phone },
                { $set: { coverKeyWords: query } }
            );

            res.status(200).send(query);
        }

    } catch (err) {
        res.status(500).send({ error: 'Erro interno do servidor' });
    }
});

//UNSPLASH HISTORY PHOTO
app.post('/getHistoryPhotoKeyWords', async (req, res) => {
    const historyKeyWords = req.body.historyKeyWords;
    const phone = req.body.phone;

    try {
        const botResponse = await getDavinciResponse(historyKeyWords);

        await client.connect();
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(process.env.MONGODB_COLLECTION_NAME);

        if (!botResponse) {
            res.status(500).send({ error: 'Não recebeu informação da IA' });
        } else {

            const query = botResponse.replace(/ /g, '+');

            // Atualização do documento na coleção
            const result = await collection.updateOne(
                { phone: phone },
                { $set: { historyKeyWords: query } }
            );

            res.status(200).send(query);
        }

    } catch (err) {
        res.status(500).send({ error: 'Erro interno do servidor' });
    }
});

//UNSPLASH PRODUCTS/SERVICES PHOTO
app.post('/getProductsPhotoKeyWords', async (req, res) => {
    const productsKeyWords = req.body.productsKeyWords;
    const phone = req.body.phone;

    try {
        const botResponse = await getDavinciResponse(productsKeyWords);

        await client.connect();
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(process.env.MONGODB_COLLECTION_NAME);

        if (!botResponse) {
            res.status(500).send({ error: 'Não recebeu informação da IA' });
        } else {
            const query = botResponse.replace(/ /g, '+');

            // Atualização do documento na coleção
            const result = await collection.updateOne(
                { phone: phone },
                { $set: { productsKeyWords: query } }
            );

            res.status(200).send(query);
        }

    } catch (err) {

        res.status(500).send({ error: 'Erro interno do servidor' });
    }
});


app.post('/getProducts', async (req, res) => {
    const products = req.body.products;
    const phone = req.body.phone;

    try {
        const botResponse = await getDavinciResponse(products);

        await client.connect();
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(process.env.MONGODB_COLLECTION_NAME);

        // Atualização do documento na coleção
        const result = await collection.updateOne(
            { phone: phone },
            { $set: { products: botResponse } }
        );

        res.status(200).send({ status: 'deu certo' });
    } catch (err) {
        res.status(500).send({ error: 'Erro interno do servidor' });
    } finally {
        await client.close();
    }
});

app.post('/getDescription', async (req, res) => {
    const phone = req.body.phone;
    const description = req.body.description;

    try {
        const botResponse = await getDavinciResponse(description);

        await client.connect();
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(process.env.MONGODB_COLLECTION_NAME);

        // Atualização do documento na coleção
        const result = await collection.updateOne(
            { phone: phone },
            { $set: { description: botResponse } }
        );

        res.status(200).send({ status: 'deu certo' });
    } catch (err) {
        res.status(500).send({ error: 'Erro interno do servidor' });
    } finally {
        await client.close();
    }
});

// Rota para obter o link do site a partir do número de telefone
app.post('/getLink', async (req, res) => {
    const phone = req.body.phone;

    try {
        await client.connect();
        const database = client.db(process.env.MONGODB_DB_NAME);
        const collection = database.collection(process.env.MONGODB_COLLECTION_NAME);

        const result = await collection.findOne({ phone });

        if (!result) {
            res.status(404).send({ message: 'Store not found' });
        } else {
            // const newString = result.name.toLowerCase().trim().replace(/\s+/g, '-');
            const newString = result.convertedName;
            res.status(200).send({ site: `https://meusiteai.com/${newString}` });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal server error' });
    } finally {
        await client.close();
    }
});

app.post('/getConvertedName', async (req, res) => {
    const phone = req.body.phone;

    try {
        await client.connect();
        const database = client.db(process.env.MONGODB_DB_NAME);
        const collection = database.collection(process.env.MONGODB_COLLECTION_NAME);

        const result = await collection.findOne({ phone });

        if (!result) {
            res.status(404).send({ message: 'Store not found' });
        } else {
            // const newString = result.name.toLowerCase().trim().replace(/\s+/g, '-');
            const newString = result.convertedName;
            res.status(200).send({ convertedName: `${newString}` });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal server error' });
    } finally {
        await client.close();
    }
});

app.post('/getForms', async (req, res) => {
    const phone = req.body.phone;
    // const id = req.body.id;

    try {
        await client.connect();
        const database = client.db(process.env.MONGODB_DB_NAME)

        const collection = database.collection(process.env.MONGODB_COLLECTION_NAME);

        const result = await collection.findOne({ phone });

        if (!result) {
            res.status(404).send({ message: 'Store not found' });
        } else {

            const newString = result.id
            res.status(200).send({ site: `https://meusiteai.com/forms/${phone}-${newString}` })
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal server error' });
    }

    // res.status(200).send({ site: `https://meusiteai.com/forms/${phone}-${id}` });
});

app.post('/setPayer', async (req, res) => {
    const phone = req.body.phone;
    const isPayer = req.body.isPayer;

    try {
        const db = client.db(process.env.MONGODB_DB_NAME)
        await db.collection(process.env.MONGODB_COLLECTION_NAME).findOneAndUpdate(
            { phone: phone },
            { $set: { isPayer: isPayer } }
        );
        res.status(200).send({ status: 'deu certo' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'erro ao atualizar o isPayer' });
    } finally {
        await client.close();
    }
});

app.post('/getDelete', async (req, res) => {
    const phone = req.body.phone;

    try {
        await client.connect();
        const database = client.db(process.env.MONGODB_DB_NAME);
        const collection = database.collection(process.env.MONGODB_COLLECTION_NAME);

        const result = await collection.deleteOne({ phone });

        if (result.deletedCount === 0) {
            res.status(404).send({ status: 'Documento não encontrado' });
        } else {
            res.status(200).send({ status: 'Documento excluído com sucesso' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 'Ocorreu um erro ao excluir o documento' });
    } finally {
        // Fechando a conexão com o banco de dados
        await client.close();
    }
});

// função para buscar os dados de um usuário
app.post('/getData', async (req, res) => {
    const phone = req.body.phone;

    try {
        await client.connect();
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(collectionName);
        const result = await collection.findOne({ phone: phone });

        if (result) {
            const {
                logo = '',
                description = '',
                history = '',
                name = '',
                products = '',
                quality1 = '',
                quality2 = '',
                quality3 = '',
                qualitydescription1 = '',
                qualitydescription2 = '',
                qualitydescription3 = '',
                color = '',
                whatsApp = '',
                mainColor = '',
                secondaryColor = '',
                accentColor = '',
                autonomous = '',
                origin = '',
            } = result; // desestruturar objeto e definir valores padrão

            res.status(200).send({
                logo,
                description,
                history,
                name,
                products,
                quality1,
                quality2,
                quality3,
                qualitydescription1,
                qualitydescription2,
                qualitydescription3,
                color,
                whatsApp,
                autonomous,
                mainColor,
                secondaryColor,
                accentColor,
                origin,
            });
        } else {
            res.status(404).send({ status: 'usuário não encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'erro ao buscar os dados' });
    } finally {
        await client.close();
    }
});

// função para atualizar o nome de um usuário
app.post('/updateName', async (req, res) => {
    const phone = req.body.phone;
    const name = req.body.name;

    try {
        await client.connect();
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(collectionName);
        const result = await collection.updateOne(
            { phone: phone },
            { $set: { name: name } }
        );

        if (result.modifiedCount === 1) {
            res.status(200).send({ status: 'deu certo' });
        } else {
            res.status(404).send({ status: 'usuário não encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'erro ao atualizar o nome' });
    } finally {
        await client.close();
    }
});

// função para atualizar o telefone do botão de contato do site
app.post('/updateWhatsApp', async (req, res) => {
    const phone = req.body.phone;
    const whatsApp = req.body.whatsApp;

    try {

        const db = client.db(process.env.MONGODB_DB_NAME)
        await db.collection(process.env.MONGODB_COLLECTION_NAME).findOneAndUpdate(
            { phone: phone },
            { $set: { whatsApp: whatsApp } }
        );
        res.status(200).send({ status: 'deu certo' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'erro ao atualizar o nome' });
    } finally {
        await client.close();
    }
});

function divideArrayItems(array) {
    const dividedArray = [];

    array.forEach(item => {
        const { field, value } = item;

        dividedArray.push({ [field]: value });
    });

    return dividedArray;
}


app.post('/updateSections', async (req, res, arr) => {
    const phone = req.body.phone;
    const params = req.body.fields;
    const dividedItems = divideArrayItems(params);

    try {
        const db = client.db(process.env.MONGODB_DB_NAME);

        const updateQuery = {};

        dividedItems.forEach(item => {
            const field = Object.keys(item)[0];
            const value = item[field];

            if (value !== '') {
                updateQuery[field] = value;
            }
        });

        await db.collection(process.env.MONGODB_COLLECTION_NAME).findOneAndUpdate(
            { phone: phone },
            { $set: updateQuery }
        );

        res.status(200).send({ status: 'deu certo' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'erro ao atualizar o nome' });
    } finally {
        await client.close();
    }
});
app.post('/updateBusinessHours', async (req, res) => {
    const phone = req.body.phone;

    const segunda = req.body.segunda;
    const terca = req.body.terca;
    const quarta = req.body.quarta;
    const quinta = req.body.quinta;
    const sexta = req.body.sexta;
    const sabado = req.body.sabado;
    const domingo = req.body.domingo;

    try {
        const db = client.db(process.env.MONGODB_DB_NAME);
        await db.collection(process.env.MONGODB_COLLECTION_NAME).findOneAndUpdate(
            { phone: phone },
            {
                $set: {
                    segunda: segunda,
                    terca: terca,
                    quarta: quarta,
                    quinta: quinta,
                    sexta: sexta,
                    sabado: sabado,
                    domingo: domingo,
                },
            }
        );
        res.status(200).send({ status: 'deu certo' });
    } catch (error) {
        console.error('erro no horário: ', error);
        res.status(500).send({ error: 'Ocorreu um erro ao atualizar o documento' });
    }
})

// função para atualizar o histórico de um usuário
app.post('/updateHistory', async (req, res) => {
    const phone = req.body.phone;
    const history = req.body.history;

    try {
        await client.connect();
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(collectionName);
        const result = await collection.updateOne(
            { phone: phone },
            { $set: { history: history } }
        );

        if (result.modifiedCount === 1) {
            res.status(200).send({ status: 'deu certo' });
        } else {
            res.status(404).send({ status: 'usuário não encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'erro ao atualizar o histórico' });
    } finally {
        await client.close();
    }
});

// função para atualizar a lista de produtos de um usuário
app.post('/updateProduct', async (req, res) => {
    const phone = req.body.phone;
    const products = req.body.products;

    try {
        await client.connect();
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(collectionName);
        const result = await collection.updateOne(
            { phone: phone },
            { $set: { products: products } }
        );

        if (result.modifiedCount > 0) {
            res.status(200).send({ status: 'deu certo' });
        } else {
            res.status(404).send({ status: 'usuário não encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'erro ao atualizar os dados' });
    } finally {
        await client.close();
    }
});


// função para atualizar a descrição de um usuário
app.post('/updateDescription', async (req, res) => {
    const phone = req.body.phone;
    const description = req.body.description;

    try {
        await client.connect();
        const collection = client.db(process.env.MONGODB_DB_NAME).collection(collectionName);
        const result = await collection.updateOne(
            { phone: phone },
            { $set: { description: description } }
        );

        if (result.modifiedCount > 0) {
            res.status(200).send({ status: 'deu certo' });
        } else {
            res.status(404).send({ status: 'usuário não encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'erro ao atualizar os dados' });
    } finally {
        await client.close();
    }
});

app.post('/getQuality', async (req, res) => {
    const name_quality1 = req.body.name_quality1;
    const name_quality2 = req.body.name_quality2;
    const name_quality3 = req.body.name_quality3;
    const phone = req.body.phone;

    try {
        await client.connect();
        const db = client.db(process.env.MONGODB_DB_NAME);
        const collection = db.collection(collectionName);
        const filter = { phone: phone };
        const updateDoc = {
            $set: {
                quality1: name_quality1,
                quality2: name_quality2,
                quality3: name_quality3,
            },
        };
        await collection.updateOne(filter, updateDoc);
        res.status(200).send({ status: 'deu certo' });
    } catch (err) {
        res.status(500).send({ status: 'erro' });
    } finally {
        await client.close();
    }
});

app.post('/getQualities', async (req, res) => {
    const qualities1 = req.body.qualities1;
    const qualities2 = req.body.qualities2;
    const qualities3 = req.body.qualities3;
    const phone = req.body.phone;

    const botResponse1 = await getDavinciResponse(qualities1);
    const botResponse2 = await getDavinciResponse(qualities2);
    const botResponse3 = await getDavinciResponse(qualities3);

    try {
        const db = client.db(process.env.MONGODB_DB_NAME);
        await db.collection(process.env.MONGODB_COLLECTION_NAME).findOneAndUpdate(
            { phone: phone },
            {
                $set: {
                    qualitydescription1: botResponse1,
                    qualitydescription2: botResponse2,
                    qualitydescription3: botResponse3,
                },
            }
        );
        res.status(200).send({ status: 'deu certo' });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ status: 'Ocorreu um erro ao atualizar o documento' });
    }
});

app.post('/getHistory', async (req, res) => {
    const history = req.body.history
    const phone = req.body.phone

    const botResponse = await getDavinciResponse(history)

    try {
        const db = client.db(process.env.MONGODB_DB_NAME);
        await db.collection(process.env.MONGODB_COLLECTION_NAME).findOneAndUpdate(
            { phone: phone },
            {
                $set: {
                    history: botResponse,
                }
            }
        );
        res.status(200).send({ status: 'deu certo' });
    } catch (error) {
        res.status(500).send({ status: 'Ocorreu um erro ao atualizar o documento' })
    }
})

app.post('/updateQualities', async (req, res) => {
    const qualities1 = req.body.qualities1;
    const qualities2 = req.body.qualities2;
    const qualities3 = req.body.qualities3;
    const phone = req.body.phone;

    const db = client.db(collectionName);

    const result = await db.collection(process.env.MONGODB_COLLECTION_NAME).findOneAndUpdate(
        { phone: phone },
        {
            $set: {
                qualitydescription1: qualities1,
                qualitydescription2: qualities2,
                qualitydescription3: qualities3,
            },
        }
    );

    if (!result) {
        return res.status(404).send({ error: 'Store not found.' });
    }

    res.status(200).send({ status: 'deu certo' });
});

app.post('/updateQuality', (req, res) => {
    const name_quality1 = req.body.name_quality1;
    const name_quality2 = req.body.name_quality2;
    const name_quality3 = req.body.name_quality3;
    const phone = req.body.phone;

    const filter = { phone: phone };
    const update = {};
    if (name_quality1 !== '') {
        update.quality1 = name_quality1;
    }
    if (name_quality2 !== '') {
        update.quality2 = name_quality2;
    }
    if (name_quality3 !== '') {
        update.quality3 = name_quality3;
    }

    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((client) => {
            const db = client.db(process.env.MONGODB_DB_NAME);
            return db.collection(process.env.MONGODB_COLLECTION_NAME).updateOne(filter, { $set: update });
        })
        .then(() => {
            res.status(200).send({ status: 'deu certo' });
        })
        .catch((err) => {
            res.status(500).send({ status: 'erro' });
        });
});

// Iniciando o servidor na porta especificada
app.listen(port, () => {

});
