import React from 'react';
import './LogTable.css';

const LogTable = ({ consultas }) => (
    <div>
        <h2>Histórico</h2>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Filme</th>
                    <th>Ano do Filme</th>
                    <th>Data/ Hora da Consulta</th>
                </tr>
            </thead>
            <tbody>
                {consultas.length > 0 ? (
                    consultas.map((consulta, index) => (
                        <tr key={index}>
                            <td>{consulta.name}</td>
                            <td>{consulta.movie}</td>
                            <td>{consulta.year}</td>
                            <td>{consulta.creation}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3">Nenhuma consulta realizada.</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);

export default LogTable;