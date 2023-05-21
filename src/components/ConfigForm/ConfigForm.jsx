import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './ConfigForm.module.css';
import InputText from '../InputText/InputText';
import InputSelect from '../InputSelect/InputSelect';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import WhiteButton from '../WhiteButton/WhiteButton';
import theme1Image from '../../assets/theme1/themeImage.jpg';
import theme2Image from '../../assets/theme2/themeImage.jpg';
import theme3Image from '../../assets/theme3/themeImage.jpg';
import OptionsPicker from '../OptionsPicker/OptionsPicker';

const skinOptions = [
  { title: 'Hombre', value: 1 },
  { title: 'Mujer', value: 2 },
  { title: 'Niño', value: 3 },
];
const themeOptions = [
  { title: 'La mina', value: 1, image: theme1Image },
  { title: 'El desierto', value: 2, image: theme2Image },
  { title: 'El campo', value: 3, image: theme3Image },
];

function ConfigForm() {
  const [form, setForm] = useState({ theme: 1 });
  const navigate = useNavigate();

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm((lastForm) => ({
      ...lastForm,
      [name]: value,
    }));
  };

  const onChecked = (e) => {
    const { checked, name } = e.target;
    setForm((lastForm) => ({
      ...lastForm,
      [name]: checked,
    }));
  };

  const handleThemeChange = (theme) => {
    setForm((lastForm) => ({
      ...lastForm,
      theme,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formCopy = { ...form };

    if (!formCopy.addTime) delete formCopy.time;
    delete formCopy.addTime;

    const params = new URLSearchParams(formCopy);

    navigate(`/game?${params.toString()}`);
  };

  return (
    <form className={styles.configForm} onSubmit={handleSubmit}>
      <InputText
        name="w"
        value={form.w}
        onChange={onChange}
        title="Ancho del laberinto"
        type="number"
        max={100}
        min={4}
        required
      />
      <InputText
        name="h"
        value={form.h}
        onChange={onChange}
        title="Alto del laberinto"
        type="number"
        max={100}
        min={4}
        required
      />
      <InputSelect
        name="skin"
        value={form.skin}
        onChange={onChange}
        title="Skin a utilizar"
        options={skinOptions}
        required
      />
      <OptionsPicker
        title="Escoge un tema:"
        options={themeOptions}
        onChange={handleThemeChange}
        className={styles.themePicker}
        value={form.theme}
      />
      <InputCheckbox
        name="addTime"
        checked={form.addTime ?? false}
        error={form.addTimeError}
        onChange={onChecked}
        title="Añadir un límite de tiempo"
        className={styles.checkboxField}
      />
      {form.addTime && (
        <InputText
          name="time"
          value={form.time}
          error={form.timeError}
          onChange={onChange}
          title="Límite de tiempo (segundos)"
          type="number"
          min={10}
          className={styles.timeField}
          required={form.addTime}
        />
      )}

      <WhiteButton submit className={styles.button}>
        Continuar
      </WhiteButton>
    </form>
  );
}

export default ConfigForm;

ConfigForm.propTypes = {};

ConfigForm.defaultProps = {};
