import { Radio, Group } from "@mantine/core";
import React, { useRef, useState } from 'react';

export default function RadioGroup({
    options,
    initialState,
    onChange,
    className,
}) {
    const radioRef = useRef(null);

    
    return (
        <Radio.Group
            className={className}
            value={initialState}
            onChange={(e) => {
                onChange(e);
            }}
            styles={{
                root: {
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                },
            }}
        >
            {options.map((option, i) => {
                return (
                    <div key={i} style={{position: 'relative'}}>
                        <div style={{cursor: 'pointer'}}>
                            <Radio
                                ref={radioRef}
                                key={option.value}
                                label={option.label}
                                value={option.value}
                                type="radio"
                                styles={{
                                    radio: {
                                        width: "18px",
                                        height: "18px",
                                        backgroundColor: "#e7eaef",
                                        borderColor: "#e7eaef",
                                        [":checked"]: {
                                            backgroundColor: "#e7eaef",
                                            borderColor: "#8674fa",
                                        },
                                        [":hover"]: {
                                            borderColor: "#8674fa",
                                            cursor: "pointer",
                                        },
                                    },
                                    icon: {
                                        color: "#8674fa",
                                        width: "10px",
                                        height: "10px",
                                        top: "calc(50% - 10px /2)",
                                        left: "calc(50% - 10px /2)",
                                    },
                                    inner: {
                                        alignSelf: "center",
                                    },
                                }}
                            >
                            </Radio>
                        </div>
  
                    </div>
                );
            })}
        </Radio.Group>
    );
}

