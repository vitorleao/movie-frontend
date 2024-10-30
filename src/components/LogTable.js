import React from 'react';
import HeaderTwo from './HeaderTwo';
import TableHeader from './TableHeader';
import TableData from './TableData';

const LogTable = ({ consultas }) => (
    <div>
        <HeaderTwo>Histórico</HeaderTwo>
        <table>
            <thead>
                <tr>
                    <TableHeader>Nome</TableHeader>
                    <TableHeader>Filme</TableHeader>
                    <TableHeader>Ano do Filme</TableHeader>
                    <TableHeader>Data/ Hora da Consulta</TableHeader>
                </tr>
            </thead>
            <tbody>
                {consultas.length > 0 ? (
                    consultas.map((consulta, index) => (
                        <tr key={index}>
                            <TableData>{consulta.name}</TableData>
                            <TableData>{consulta.movie}</TableData>
                            <TableData>{consulta.year}</TableData>
                            <TableData>{consulta.creation}</TableData>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <TableData colSpan="3">Nenhuma consulta realizada.</TableData>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);

export default LogTable;