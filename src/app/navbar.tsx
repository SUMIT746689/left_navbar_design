'use client';

import { useState } from 'react';
import styles from '../styles/navBar.module.css';
import Navdropdown from './navdropdown';
import { FaBeer } from 'react-icons/fa';
import { AiOutlineDoubleRight, AiOutlineHome } from 'react-icons/ai';

export default function () {

  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  return (
    <>
      <div
        className={styles.container}
        style={{ width: '270px', textTransform: 'uppercase', cursor: 'pointer', backgroundColor: '#7e22ce', height: '100vh', overflowY: 'scroll' }}>
        <div>
          <div
            className={styles.category_hover}
            style={{ padding: '12px 2px', borderBottom: '1px solid white', }}
            onClick={() => setClick((v) => !v)}
          >
            <AiOutlineHome style={{margin:'0px 4px',zIndex:'10'}} />  All Pages s <AiOutlineDoubleRight className={click ? `${styles.icons_select} ${styles.icons}` : `${styles.icons} ${styles.icons_deselect}`} />
          </div>
          <Navdropdown click={click} >
            <div>HI</div>
            <div>HI</div>
            <div>HI</div>
            <div>HI</div>
          </Navdropdown>
        </div>
        <div>
          <div
            className={styles.category_hover}
            style={{ padding: '12px 2px', borderBottom: '1px solid white', }}
            onClick={() => setClick2((v) => !v)}
          >
            All Pages <AiOutlineDoubleRight className={click2 ? `${styles.icons_select} ${styles.icons}` : `${styles.icons} ${styles.icons_deselect}`} />
          </div>
          <Navdropdown click={click2}>
            <div>home</div>
            <div>home</div>
            <div>home</div>
            <div>home</div>
            <div>home</div>
            <div>home</div>
            <div>home</div>
            <div>home</div>
            <div>home</div>
            <div>home</div>
            <div>home</div>
            <div>home</div>
          </Navdropdown>
        </div>
        <div
          className={styles.category_hover}
          style={{ padding: '12px 2px', borderBottom: '1px solid white', }}
        >
          setting
        </div>
      </div>
    </>
  )
}

