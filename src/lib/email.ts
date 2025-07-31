import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

// Initialize EmailJS when the module loads
initEmailJS();

export async function sendContactEmail(formData: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      throw new Error('EmailJS configuration is missing. Please check your environment variables.');
    }

    // Prepare template parameters
    const templateParams = {
      to_name: 'Altara Team',
      to_email: 'yash1thfake@gmail.com',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const response = await emailjs.send(serviceId, templateId, templateParams);
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}

export async function sendBrochureRequest(email: string) {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const adminTemplateId = import.meta.env.VITE_EMAILJS_BROCHURE_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userTemplateId = import.meta.env.VITE_EMAILJS_USER_CONFIRMATION_TEMPLATE_ID;

    if (!serviceId || !adminTemplateId) {
      throw new Error('EmailJS configuration is missing. Please check your environment variables.');
    }

    // Email 1: Admin notification about brochure request
    const adminEmailParams = {
      to_name: 'Altara Team',
      to_email: 'yash1thfake@gmail.com',
      from_name: 'Website Visitor',
      from_email: email,
      reply_to: email,
      subject: 'Brochure Request from Altara Website',
      message: `A visitor has requested the Altara brochure. Please send the brochure to: ${email}`,
    };

    // Send admin notification
    const adminResponse = await emailjs.send(serviceId, adminTemplateId, adminEmailParams);
    console.log('Admin notification sent successfully:', adminResponse);

    // Email 2: User confirmation email (only if user template is configured)
    if (userTemplateId && userTemplateId !== 'your_user_template_id_here') {
      const userEmailParams = {
        to_name: 'Valued Customer',
        to_email: email,
        from_name: 'Altara Team',
        from_email: 'yash1thfake@gmail.com',
        reply_to: 'yash1thfake@gmail.com',
        subject: 'Thank you for your interest in Altara!',
        message: `Dear Valued Customer,

Thank you for requesting our brochure! We're excited to share more about how Altara can help transform your business with AI solutions.

Our team will review your request and send you the comprehensive brochure within the next 24 hours. The brochure includes:
• Detailed information about our AI services
• Case studies and success stories
• Pricing and package options
• Implementation timelines

If you have any immediate questions or would like to schedule a consultation, please don't hesitate to reply to this email or contact us directly.

Best regards,
Team Altara

P.S. Keep an eye on your inbox - we'll be in touch soon!`,
      };

      const userResponse = await emailjs.send(serviceId, userTemplateId, userEmailParams);
      console.log('User confirmation sent successfully:', userResponse);
      return [adminResponse, userResponse];
    }

    return [adminResponse];
  } catch (error) {
    console.error('Brochure request error:', error);
    throw error;
  }
}