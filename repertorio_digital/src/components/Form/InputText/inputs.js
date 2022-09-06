import { TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export const TextInput = ({ name, control, label }) => {

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <TextField
                sx={{}}
                onChange={onChange} 
                value={value} 
                label={label} />
            )}
        />

    )


}