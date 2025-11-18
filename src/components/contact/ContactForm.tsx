import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', message: '' };

/** Simple contact form with client-side validation & success notice. */
const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  /** Very lightweight validation */
  const validate = (): Partial<FormState> => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!form.message.trim()) errs.message = 'Required';
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
      errs.email = 'Enter a valid email';
    return errs;
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);

    try {
      // TODO: replace with real API / email service call
      await new Promise((r) => setTimeout(r, 1200));
      setSent(true);
      setForm(initialState);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: 'background.default', py: { xs: 8, md: 10 }, px: 2 }}>
      <Container maxWidth="sm">
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Name"
                fullWidth
                value={form.name}
                onChange={handleChange('name')}
                error={Boolean(errors.name)}
                helperText={errors.name}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Email"
                fullWidth
                value={form.email}
                onChange={handleChange('email')}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                value={form.message}
                onChange={handleChange('message')}
                error={Boolean(errors.message)}
                helperText={errors.message}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={submitting}
                startIcon={submitting ? <CircularProgress size={20} /> : undefined}
              >
                {submitting ? 'Sending…' : 'Send Message'}
              </Button>
            </Grid>

            {sent && (
              <Grid size={{ xs: 12 }}>
                <Alert severity="success" onClose={() => setSent(false)} sx={{ mt: 1 }}>
                  Thanks! We’ll be in touch soon.
                </Alert>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
