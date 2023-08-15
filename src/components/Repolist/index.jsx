import { useEffect, useState } from "react";

import styles from './RepoList.modules.css'


const RespoList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setCarregando] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/EdvanSilva33/repos')
            .then(res => res.json())
            .then(resJson => {
                setTimeout(()=> {
                    setCarregando(false);
                    setRepos(resJson);

                }, 3000)
                
            })
    }, []);

    return (
<>
         {estaCarregando && (
             <h2>Carregando ....</h2>

         )}

        <ul className={styles.list}>

            {repos.map(({id, name, language, html_url}) => (
                <li className={styles.listItem} key={id} >
                    <div className={styles.itemName}>
                    <b>Nome:</b>{name}
                    </div>
                    <div className={styles.itemLanguagem}>
                    <b>Liguagem:</b>
                     {language}

                    </div>
                 
                    <a className={styles.itemLinguagem} href={html_url}>Vistar no git</a><br/>
                  
                </li>


            ))}

            <li>
                Repositorio
            </li>
        </ul>

</>
    )
}

export default RespoList;