import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Page = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <Typography variant="h4" gutterBottom>
        О нас
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Наша миссия
            </Typography>
            <Typography variant="body1" paragraph>
              Мы стремимся предоставлять нашим клиентам лучший выбор товаров высокого качества, обеспечивая при этом удобство и превосходный сервис.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Наша команда
            </Typography>
            <Typography variant="body1" paragraph>
              Наша команда состоит из опытных специалистов, готовых помочь вам с выбором товаров и ответить на все ваши вопросы.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Наши контакты
            </Typography>
            <Typography variant="body1">
              Адрес: ул. Примерная, д.123, г. Примерный<br />
              Телефон: +7 (123) 456-78-90<br />
              Email: info@example.com
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <div style={{ marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          О нас (продолжение)
        </Typography>
        <Typography variant="body1" paragraph>
          Наша компания была основана в 20XX году с целью предложить клиентам уникальный опыт покупок гаджетов. Мы стремимся к тому, чтобы каждый наш клиент получил не только качественный продукт, но и высокий уровень сервиса.
        </Typography>
        <Typography variant="body1" paragraph>
          Мы постоянно работаем над тем, чтобы расширить ассортимент продукции и следить за последними технологическими тенденциями, чтобы предложить вам только лучшие и самые современные гаджеты.
        </Typography>
        <Typography variant="body1" paragraph>
          Спасибо, что выбрали нас!
        </Typography>
      </div>
    </div>
  );
};

export default Page;
