
  # Rental Company Website

  This is a code bundle for Rental Company Website. The original project is available at https://www.figma.com/design/Pb7lXDc2ZFkTdPcaFj4jr1/Rental-Company-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

## Email (EmailJS) setup

1. Create an account at EmailJS and add a service and template.
2. In your project root, create a `.env.local` file with:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

3. In EmailJS, make sure your template fields match the keys used in the app:
   - `first_name`, `last_name`, `email`, `phone`, `event_date`, `event_type`, `details`

4. Restart the dev server after adding env variables.
  