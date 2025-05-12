import React, { useState } from 'react';
import { Container, Typography, Dialog, DialogActions, DialogContent, Button, TextField } from '@mui/material';
import Calendar from 'react-calendar'; // Importujemy kalendarz
import 'react-calendar/dist/Calendar.css'; // Styl dla kalendarza
import AnimatedPage from '../components/AnimatedPage';

const CalendarPage = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [eventDescription, setEventDescription] = useState('');

  // Funkcja do obsługi zmiany daty
  const handleDateChange = (value: Date | Date[] | null | [Date | null, Date | null], event: React.MouseEvent<HTMLButtonElement>) => {
    if (value instanceof Date) {
      setDate(value); // Ustawiamy datę, gdy jest to pojedyncza data
      setOpenDialog(true); // Otwieramy dialog
    } else if (Array.isArray(value) && value[0] instanceof Date) {
      setDate(value[0]); // Obsługujemy przypadek zakresu dat (wybieramy początkową datę)
      setOpenDialog(true); // Otwieramy dialog
    } else {
      setDate(null); // Jeśli nie wybrano daty, ustawiamy null
    }
  };

  const handleEventSubmit = () => {
    console.log(`Wydarzenie dodane na ${date?.toDateString()}: ${eventDescription}`);
    setOpenDialog(false); // Zamknij dialog po dodaniu wydarzenia
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Zamknij dialog bez dodawania wydarzenia
  };

  return (
    <AnimatedPage>
      <Container>
        <Typography variant="h3" gutterBottom>
          Kalendarz
        </Typography>
        <Typography variant="body1" gutterBottom>
          Kliknij na dzień, aby dodać wydarzenie.
        </Typography>

        <Calendar
          onChange={handleDateChange} // Przypisujemy funkcję obsługującą zmianę daty
          value={date} // Ustawiamy aktualnie wybraną datę
        />

        {/* Dialog do dodania wydarzenia */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogContent>
            <Typography variant="h6">Dodaj wydarzenie na {date?.toDateString()}</Typography>
            <TextField
              fullWidth
              label="Opis wydarzenia"
              variant="outlined"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Anuluj
            </Button>
            <Button onClick={handleEventSubmit} color="primary">
              Dodaj wydarzenie
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </AnimatedPage>
  );
};

export default CalendarPage;
