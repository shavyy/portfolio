import styles from "../style";
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import 'semantic-ui-css/semantic.min.css';

import { motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const SERVICE_ID = "service_zagdcjf"
const TEMPLATE_ID = "template_p2kjqnu"
const USER_ID = "dYaiNj_kFOJil9vba"

const handleOnSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'Bravo !',
        title: 'Message envoyé avec succès'
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'erreur !',
        title: 'Ooops, une erreur est apparue',
        text: error.text,
      })
    });
  e.target.reset()
};

const Contact = () => (
  <section id="contacts" className={`${styles.paddingY} ${styles.flexCenter} ${styles.marginX} ${styles.padding} sm:flex-row flex-col mt-40 max-w-[875px]`}>

    <Form onSubmit={handleOnSubmit} inverted className='mt-12 flex flex-col gap-3'>

        <p className={styles.sectionSubText}>Discutons ensemble</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

            <Form.Field
              id='form-input-control-name'
              control={Input}
              label='Nom'
              name='user_name'
              placeholder='Entrez votre Nom…'
              required
              icon='user name'
              iconPosition='left'
            />
            
            <Form.Field
              id='form-input-control-surname'
              control={Input}
              label='Prénom'
              name='user_surname'
              placeholder='Entrez votre Prénom'
              required
              icon='user surname'
              iconPosition='left'
            />

            <Form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
              name='user_email'
              placeholder='Entrez votre Email…'
              required
              icon='user mail'
              iconPosition='left'
            />

          <Form.Field 
              id='form-input-control-last-name'
              control={Input}
              label='Objet'
              name='user_objet'
              placeholder='Entrez l objet du mail …'
              required
              icon='user circle'
              iconPosition='left'
            />
          <Form.Field 
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Message'
            name='user_message'
            placeholder='Entrez votre Message…'
            required
            icon='user circle'
            iconPosition='left'
          />
          <Form.Checkbox 
            label='En soumettant ce formulaire, jaccepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la Politique de confidentialité.' 
            required
          />
        <div className={`${styles.flexCenter}`}> 
          <Button type='Submit' className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mb-5 ${styles}`}>Envoyer</Button>
        </div>
      </Form> 
      <div className={``}>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
  </section>
);

export default Contact;