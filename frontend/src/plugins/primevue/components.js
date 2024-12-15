export default {
  // --------------------------------------------------------------------------
  // Form
  // --------------------------------------------------------------------------
  // AutoComplete
  // CascadeSelect
  // Checkbox
  checkbox: {
    width: '1.6rem',
    height: '1.6rem',
    borderRadius: '{border.radius.xs}',
    sm: {
      width: '1.2rem',
      height: '1.2rem',
    },
    lg: {
      width: '2rem',
      height: '2rem',
    },
    icon: {
      smSize: '0.6rem',
      size: '1rem',
      lgSize: '1.2rem',
    },
    colorScheme: {
      light: {
        borderColor: '{primary.200}',
        hoverBorderColor: '{primary.color}',
        checked: {
          background: '{surface.0}',
          hoverBackground: '{surface.0}',
          borderColor: '{primary.color}',
          hoverBorderColor: '{primary.color}',
        },
        icon: {
          color: '{primary.color}',
          checkedColor: '{primary.color}',
          checkedHoverColor: '{primary.color}',
          disabledColor: '{surface.200}',
        },
      },
    },
    css: ({ dt }) => `
      .p-checkbox-icon {
        filter: drop-shadow(0 0 0.5px ${dt('primary.color')}); 
      }
    `,
  },
  // ColorPicker
  colorpicker: {
    previewWidth: '3rem',
    previewHeight: '3rem',
  },
  // DatePicker
  datepicker: {
    select: {
      monthPadding: '0.5rem 1rem',
      yearPadding: '0.5rem 1rem',
    },
    titleFontWeight: '700',
    monthViewMargin: '1rem 0',
    dayViewMargin: '1rem 0',
    weekDayFontWeight: '700',
    date: {
      width: '3rem',
      height: '3rem',
      borderRadius: '{border.radius.lg}',
    },
    colorScheme: {
      light: {
        headerColor: '{primary.color}',
        select: {
          month: {
            color: '{primary.color}',
            hoverColor: '{primary.700}',
            hoverBackground: 'transparent',
          },
          year: {
            color: '{primary.color}',
            hoverColor: '{primary.700}',
            hoverBackground: 'transparent',
          },
        },
        date: {
          hoverColor: '{primary.contrastColor}',
          hoverBackground: '{primary.color}',
          rangeSelectedColor: '{primary.contrastColor}',
          rangeSelectedBackground: '{primary.color}',
        },
        today: {
          color: '{primary.color}',
          background: 'transparent',
        },
      },
    },
  },
  // Editor
  // FloatLabel
  floatlabel: {
    activeFontSize: '1.2rem',
  },
  // IconField
  // IftaLabel
  // InputGroup
  // InputMask
  // InputNumber
  // InputOtp
  inputotp: {
    css: ({ dt }) => `
      .p-inputotp {
        .p-inputtext {
          width: ${dt('inputtext.app.min.height')};
          min-width: ${dt('inputtext.app.min.height')};
        }
      }
    `,
  },
  // InputText
  inputtext: {
    app: {
      width: '25rem',
      minWidth: '10rem',
      maxWidth: '40rem',
      minHeight: '4.2rem',
    },
    css: ({ dt }) => `
      .p-inputtext {
        width: ${dt('inputtext.app.width')};
        min-width: ${dt('inputtext.app.minWidth')};
        max-width: ${dt('inputtext.app.maxWidth')};
        min-height: ${dt('inputtext.app.minHeight')};
        &:not(:disabled):not(.p-invalid) {
          &:placeholder-shown,
          &::placeholder {
            color: var(--p-inputtext-placeholder-color);
          }
        }
        &:placeholder-shown,
        &::placeholder {
          color: var(--p-surface-200);
        }
        &.p-invalid {
          color: var(--p-inputtext-invalid-placeholder-color);
        }
      }
    `,
  },
  // KeyFilter
  // Knob
  // Listbox
  // MultiSelect
  multiselect: {
    chipBorderRadius: '10rem',
    sm: {
      fontSize: '1.4rem',
    },
    css: ({ dt }) => `
      .p-multiselect {
        align-items: center;
        width: ${dt('select.app.width')};
        min-width: ${dt('select.app.min.width')};
        max-width: ${dt('select.app.max.width')};
        height: ${dt('select.app.height')};
        min-height: ${dt('select.app.min.height')};
        max-height: ${dt('select.app.max.height')};
        &.p-multiselect-sm {
          height: ${dt('select.app.sm.height')};
        }
        .p-multiselect-dropdown {
          .p-icon {
            width: ${dt('select.app.dropdownIconSize')};
            height: ${dt('select.app.dropdownIconSize')};
            margin-right: 0.5rem;
          }
        }
        .p-multiselect-label {
          flex-wrap: wrap;
          &:has(.p-chip) {
            padding: calc(${dt('multiselect.padding.y')} / 2)
              ${dt('multiselect.padding.x')};
          }
        }
        .p-chip {
          padding-block: ${dt('chip.padding.y')};
          padding-inline: ${dt('chip.padding.x')};
          .p-chip-label {
            max-width: 80px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .icon {
            color: ${dt('chip.remove.icon.color')};
          }
        }
      }
      .p-multiselect-overlay-sm .p-select-option {
        height: ${dt('select.app.sm.height')};
      }
    `,
  },
  // Password
  // RadioButton
  radiobutton: {
    width: '16px',
    height: '16px',
    sm: {
      width: '12px',
      height: '12px',
    },
    lg: {
      width: '20px',
      height: '20px',
    },
    icon: {
      smSize: '6px',
      size: '8px',
      lgSize: '10px',
    },
    colorScheme: {
      light: {
        checked: {
          background: '{surface.0}',
          hoverBackground: '{surface.0}',
        },
        icon: {
          color: '{primary.color}',
          checkedColor: '{primary.color}',
          checkedHoverColor: '{primary.color}',
          disabledColor: '{surface.200}',
        },
      },
    },
  },
  // Rating
  // Select
  select: {
    sm: {
      fontSize: '1.4rem',
    },
    app: {
      width: '20rem',
      minWidth: 'fit-content',
      maxWidth: '40rem',
      height: '4.2rem',
      minHeight: 'fit-content',
      maxHeight: '100%',
      smHeight: '3.2rem',
      dropdownIconSize: '1.4rem',
    },
    css: ({ dt }) => `
      .p-select {
        align-items: center;
        width: ${dt('select.app.width')};
        min-width: ${dt('select.app.min.width')};
        max-width: ${dt('select.app.max.width')};
        height: ${dt('select.app.height')};
        min-height: ${dt('select.app.min.height')};
        max-height: ${dt('select.app.max.height')};
        &.p-select-sm {
          height: ${dt('select.app.sm.height')};
        }
        .p-select-dropdown {
          .p-icon {
            width: ${dt('select.app.dropdownIconSize')};
            height: ${dt('select.app.dropdownIconSize')};
            margin-right: 0.5rem;
          }
        }
        .p-select-label {
          flex-wrap: wrap;
          &:has(.p-chip) {
            padding: calc(${dt('multiselect.padding.y')} / 2)
              ${dt('multiselect.padding.x')};
          }
        }
        .p-chip {
          padding-block: ${dt('chip.padding.y')};
          padding-inline: ${dt('chip.padding.x')};
          .p-chip-label {
            max-width: 80px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .icon {
            color: ${dt('chip.remove.icon.color')};
          }
        }
      }
      .p-select-overlay-sm .p-select-option {
        height: ${dt('select.app.sm.height')};
      }
    `,
  },
  // SelectButton
  selectbutton: {
    css: ({ dt }) => `
      .p-selectbutton {
        .p-togglebutton::before {
          border-radius: ${dt('border.radius.sm')};
        }
      }
    `,
  },
  // Slider
  // Textarea
  textarea: {
    app: {
      width: '25rem',
      minWidth: '10rem',
      maxWidth: '40rem',
    },
    css: ({ dt }) => `
      .p-textarea {
        width: ${dt('textarea.app.width')};
        min-width: ${dt('textarea.app.min.width')};
        max-width: ${dt('textarea.app.max.width')};
      }
    `,
  },
  // ToggleButton
  togglebutton: {
    padding: '0.75rem 1rem',
    contentTop: '0.3rem',
  },
  // ToggleSwitch
  toggleswitch: {
    width: '3.4rem',
    height: '2rem',
    handle: {
      size: '1.4rem',
    },
    colorScheme: {
      light: {
        background: '{surface.0}',
        hoverBackground: '{surface.0}',
        checkedBackground: '{surface.0}',
        checkedHoverBackground: '{surface.0}',
        borderColor: '{surface.200}',
        hoverBorderColor: '{primary.color}',
        checkedBorderColor: '{primary.color}',
        checkedHoverBorderColor: '{primary.color}',
        handle: {
          background: '{surface.200}',
          hoverBackground: '{surface.200}',
          checkedBackground: '{primary.color}',
          checkedHoverBackground: '{primary.color}',
          disabledBackground: '{surface.100}',
        },
      },
    },
    css: ({ dt }) => `
      .p-toggleswitch {
        &.p-toggleswitch-checked.p-disabled .p-toggleswitch-slider {
          border-color: ${dt('toggleswitch.border.color')};
        }
      }
    `,
  },
  // TreeSelect
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Button
  // --------------------------------------------------------------------------
  // Button
  button: {
    iconOnlyWidth: 'fit-content',
    app: {
      width: '14rem',
      height: '4.2rem',
      sm: {
        width: '8rem',
        height: '3.2rem',
        fontSize: '1.2rem',
      },
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.contrast.color}',
          hoverColor: '{primary.contrast.color}',
          activeColor: '{primary.contrast.color}',
          borderColor: '{primary.500}',
          hoverBorderColor: '{primary.600}',
          activeBorderColor: '{primary.700}',
          background: '{primary.500}',
          hoverBackground: '{primary.600}',
          activeBackground: '{primary.700}',
        },
        secondary: {
          color: '{primary.contrast.color}',
          hoverColor: '{primary.contrast.color}',
          activeColor: '{primary.contrast.color}',
          borderColor: '{surface.400}',
          hoverBorderColor: '{surface.500}',
          activeBorderColor: '{surface.600}',
          background: '{surface.400}',
          hoverBackground: '{surface.500}',
          activeBackground: '{surface.600}',
        },
        success: {
          color: '{primary.contrast.color}',
          hoverColor: '{primary.contrast.color}',
          activeColor: '{primary.contrast.color}',
          borderColor: '{green.400}',
          hoverBorderColor: '{green.500}',
          activeBorderColor: '{green.600}',
          background: '{green.400}',
          hoverBackground: '{green.500}',
          activeBackground: '{green.600}',
        },
        info: {
          color: '{primary.contrast.color}',
          hoverColor: '{primary.contrast.color}',
          activeColor: '{primary.contrast.color}',
          borderColor: '{blue.400}',
          hoverBorderColor: '{blue.500}',
          activeBorderColor: '{blue.600}',
          background: '{blue.400}',
          hoverBackground: '{blue.500}',
          activeBackground: '{blue.600}',
        },
        warn: {
          color: '{primary.contrast.color}',
          hoverColor: '{primary.contrast.color}',
          activeColor: '{primary.contrast.color}',
          borderColor: '{orange.400}',
          hoverBorderColor: '{orange.500}',
          activeBorderColor: '{orange.600}',
          background: '{orange.400}',
          hoverBackground: '{orange.500}',
          activeBackground: '{orange.600}',
        },
        help: {
          color: '{primary.contrast.color}',
          hoverColor: '{primary.contrast.color}',
          activeColor: '{primary.contrast.color}',
          borderColor: '{purple.400}',
          hoverBorderColor: '{purple.500}',
          activeBorderColor: '{purple.600}',
          background: '{purple.400}',
          hoverBackground: '{purple.500}',
          activeBackground: '{purple.600}',
        },
        danger: {
          color: '{primary.contrast.color}',
          hoverColor: '{primary.contrast.color}',
          activeColor: '{primary.contrast.color}',
          borderColor: '{red.400}',
          hoverBorderColor: '{red.500}',
          activeBorderColor: '{red.600}',
          background: '{red.400}',
          hoverBackground: '{red.500}',
          activeBackground: '{red.600}',
        },
        contrast: {
          color: '{primary.contrast.color}',
          hoverColor: '{primary.contrast.color}',
          activeColor: '{primary.contrast.color}',
          borderColor: '{gray.500}',
          hoverBorderColor: '{gray.700}',
          activeBorderColor: '{gray.800}',
          background: '{gray.500}',
          hoverBackground: '{gray.700}',
          activeBackground: '{gray.800}',
        },
        outlined: {
          primary: {
            color: '{primary.500}',
            hoverColor: '{primary.700}',
            activeColor: '{primary.800}',
            borderColor: '{primary.500}',
            hoverBorderColor: '{primary.700}',
            activeBorderColor: '{primary.800}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          secondary: {
            color: '{surface.400}',
            hoverColor: '{surface.600}',
            activeColor: '{surface.700}',
            borderColor: '{surface.400}',
            hoverBorderColor: '{surface.600}',
            activeBorderColor: '{surface.700}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          success: {
            color: '{green.400}',
            hoverColor: '{green.600}',
            activeColor: '{green.700}',
            borderColor: '{green.400}',
            hoverBorderColor: '{green.600}',
            activeBorderColor: '{green.700}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          info: {
            color: '{blue.400}',
            hoverColor: '{blue.600}',
            activeColor: '{blue.700}',
            borderColor: '{blue.400}',
            hoverBorderColor: '{blue.600}',
            activeBorderColor: '{blue.700}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          warn: {
            color: '{orange.400}',
            hoverColor: '{orange.600}',
            activeColor: '{orange.700}',
            borderColor: '{orange.400}',
            hoverBorderColor: '{orange.600}',
            activeBorderColor: '{orange.700}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          help: {
            color: '{purple.400}',
            hoverColor: '{purple.600}',
            activeColor: '{purple.700}',
            borderColor: '{purple.400}',
            hoverBorderColor: '{purple.600}',
            activeBorderColor: '{purple.700}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          danger: {
            color: '{red.400}',
            hoverColor: '{red.600}',
            activeColor: '{red.700}',
            borderColor: '{red.400}',
            hoverBorderColor: '{red.600}',
            activeBorderColor: '{red.700}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          contrast: {
            color: '{gray.500}',
            hoverColor: '{gray.700}',
            activeColor: '{gray.800}',
            borderColor: '{gray.500}',
            hoverBorderColor: '{gray.700}',
            activeBorderColor: '{gray.800}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
        },
        text: {
          primary: {
            color: '{primary.500}',
            hoverColor: '{primary.700}',
            activeColor: '{primary.800}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          secondary: {
            color: '{surface.500}',
            hoverColor: '{surface.700}',
            activeColor: '{surface.800}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          success: {
            color: '{green.500}',
            hoverColor: '{green.700}',
            activeColor: '{green.800}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          info: {
            color: '{blue.500}',
            hoverColor: '{blue.700}',
            activeColor: '{blue.800}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          warn: {
            color: '{orange.500}',
            hoverColor: '{orange.700}',
            activeColor: '{orange.800}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          help: {
            color: '{purple.500}',
            hoverColor: '{purple.700}',
            activeColor: '{purple.800}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          danger: {
            color: '{red.500}',
            hoverColor: '{red.700}',
            activeColor: '{red.800}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
          contrast: {
            color: '{gray.500}',
            hoverColor: '{gray.700}',
            activeColor: '{gray.800}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
        },
      },
    },
    css: ({ dt }) => `
      .p-button {
        &:not(.p-button-icon-only):not(.p-button-text):not(.p-button-sm) {
          height: ${dt('button.app.height')};
        }
        &:not(.p-button-rounded):not(.p-button-text):not(.p-button-sm) {
          width: ${dt('button.app.width')};
          min-width: fit-content;
          max-width: 100%;
        }
      }

      .p-button-loading .p-button-label {
        display: none;
      }
        
      .p-button-sm {
        width: ${dt('button.app.sm.width')};
        min-width: fit-content;
        max-width: 100%;
        height: ${dt('button.app.sm.height')};
        font-size: ${dt('button.app.sm.fontSize')};
        border-radius: ${dt('border.radius.sm')};
      }

      .p-button-icon-only {
        &:not(.p-button-text) {
          min-width: ${dt('button.app.height')};
          min-height: ${dt('button.app.height')};
        }
      }

      .p-button-icon-only.p-button-text {
        min-width: ${dt('icon.size')};
        min-height: ${dt('icon.size')};
      }

      .p-button-outlined {
        &:not(:disabled):hover {
          color: ${dt('button.outlined.primary.hover.color')};
          border-color: ${dt('button.outlined.primary.hover.border.color')};
        }
        &:not(:disabled):active {
          color: ${dt('button.outlined.primary.active.color')};
          border-color: ${dt('button.outlined.primary.active.border.color')};
        }
        &.p-button-secondary {
          &:not(:disabled):hover {
            color: ${dt('button.outlined.secondary.hover.color')};
            border-color: ${dt('button.outlined.secondary.hover.border.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.outlined.secondary.active.color')};
            border-color: ${dt(
              'button.outlined.secondary.active.border.color',
            )};
          }
        }
        &.p-button-success {
          &:not(:disabled):hover {
            color: ${dt('button.outlined.success.hover.color')};
            border-color: ${dt('button.outlined.success.hover.border.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.outlined.success.active.color')};
            border-color: ${dt('button.outlined.success.active.border.color')};
          }
        }
        &.p-button-info {
          &:not(:disabled):hover {
            color: ${dt('button.outlined.info.hover.color')};
            border-color: ${dt('button.outlined.info.hover.border.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.outlined.info.active.color')};
            border-color: ${dt('button.outlined.info.active.border.color')};
          }
        }
        &.p-button-warn {
          &:not(:disabled):hover {
            color: ${dt('button.outlined.warn.hover.color')};
            border-color: ${dt('button.outlined.warn.hover.border.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.outlined.warn.active.color')};
            border-color: ${dt('button.outlined.warn.active.border.color')};
          }
        }
        &.p-button-help {
          &:not(:disabled):hover {
            color: ${dt('button.outlined.help.hover.color')};
            border-color: ${dt('button.outlined.help.hover.border.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.outlined.help.active.color')};
            border-color: ${dt('button.outlined.help.active.border.color')};
          }
        }
        &.p-button-danger {
          &:not(:disabled):hover {
            color: ${dt('button.outlined.danger.hover.color')};
            border-color: ${dt('button.outlined.danger.hover.border.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.outlined.danger.active.color')};
            border-color: ${dt('button.outlined.danger.active.border.color')};
          }
        }
        &.p-button-contrast {
          &:not(:disabled):hover {
            color: ${dt('button.outlined.contrast.hover.color')};
            border-color: ${dt('button.outlined.contrast.hover.border.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.outlined.contrast.active.color')};
            border-color: ${dt('button.outlined.contrast.active.border.color')};
          }
        }

        &.app-button-outlined-hover-fill {
          &:not(:disabled):hover {
            color: ${dt('button.primary.color')};
            border-color: ${dt('button.primary.hover.border.color')};
            background: ${dt('button.primary.hover.border.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.primary.color')};
            border-color: ${dt('button.primary.active.border.color')};
            background: ${dt('button.primary.active.border.color')};
          }
        }
        &.app-button-outlined-secondary-hover-fill {
          &:not(:disabled):hover {
            color: ${dt('button.secondary.color')};
            border-color: ${dt('button.secondary.hover.border.color')};
            background: ${dt('button.secondary.hover.border.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.secondary.color')};
            border-color: ${dt('button.secondary.active.border.color')};
            background: ${dt('button.secondary.active.border.color')};
          }
        }
      }

      .p-button-text {
        &:not(:disabled):hover {
          color: ${dt('button.text.primary.hover.color')};
        }
        &:not(:disabled):active {
          color: ${dt('button.text.primary.active.color')};
        }
        &.p-button-secondary {
          &:not(:disabled):hover {
            color: ${dt('button.text.secondary.hover.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.text.secondary.active.color')};
          }
        }
        &.p-button-success {
          &:not(:disabled):hover {
            color: ${dt('button.text.success.hover.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.text.success.active.color')};
          }
        }
        &.p-button-info {
          &:not(:disabled):hover {
            color: ${dt('button.text.info.hover.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.text.info.active.color')};
          }
        }
        &.p-button-warn {
          &:not(:disabled):hover {
            color: ${dt('button.text.warn.hover.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.text.warn.active.color')};
          }
        }
        &.p-button-help {
          &:not(:disabled):hover {
            color: ${dt('button.text.help.hover.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.text.help.active.color')};
          }
        }
        &.p-button-danger {
          &:not(:disabled):hover {
            color: ${dt('button.text.danger.hover.color')};
          }
          &:not(:disabled):active {
            color: ${dt('button.text.danger.active.color')};
          }
        }
      }
    `,
  },
  // SpeedDial
  // SplitButton
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Data
  // --------------------------------------------------------------------------
  // DataTable
  datatable: {
    rowToggleButtonSize: '3rem',
    colorScheme: {
      light: {
        headerCellBorderColor: 'transparent',
        headerCellBackground: 'transparent',
        bodyCellBorderColor: 'transparent',
        footerCellBackground: 'transparent',
        row: {
          toggleButtonHoverBackground: 'transparent',
        },
      },
    },
  },
  // DataView
  // OrderList
  // OrgChart
  // Paginator
  paginator: {
    app: {
      minWidth: '6rem',
      maxWidth: 'fit-content',
    },
    colorScheme: {
      light: {
        background: 'transparent',
      },
    },
    css: ({ dt }) => `
      .p-paginator {
        .p-paginator-rpp-dropdown {
          min-width: ${dt('paginator.app.min.width')};
          max-width: ${dt('paginator.app.max.width')};
        }
      }
    `,
  },
  // PickList
  // Timeline
  // Tree
  // TreeTable
  // VirtualScroller
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Panel
  // --------------------------------------------------------------------------
  // Accordion
  accordion: {
    css: ({ dt }) => `
      .p-accordion {
        .p-accordionheader,
        .p-accordionheader svg {
          transition: color ${dt('accordion.transition.duration')},
            background ${dt('accordion.transition.duration')};
        }
        .p-accordionpanel {
          &:last-child {
            border-color: transparent;
          }
        }
      }
    `,
  },
  // Card
  card: {
    title: {
      fontSize: '1.6rem',
      fontWeight: '600',
    },
    bodyGap: '1rem',
    colorScheme: {
      light: {
        subtitleColor: '{surface.300}',
      },
    },
  },
  // Deferred
  // Divider
  divider: {
    colorScheme: {
      light: {
        contentBackground: '{surface.50}',
      },
    },
  },
  // Fieldset
  fieldset: {
    colorScheme: {
      light: {
        legend: {
          background: 'transparent',
          hoverBackground: 'transparent',
        },
      },
    },
  },
  // Panel
  // ScrollPanel
  scrollpanel: {
    bar: {
      size: '0.6rem',
      borderRadius: '{border.radius.md}',
    },
    colorScheme: {
      light: {
        barBackground: '{primary.300}',
      },
    },
  },
  // Splitter
  // Stepper
  stepper: {
    stepNumber: {
      size: '4rem',
      fontSize: '1.6rem',
    },
    colorScheme: {
      light: {
        steppanelBackground: 'transparent',
        stepNumber: {
          activeColor: '{primary.contrastColor}',
          activeBorderColor: '{stepper.step.title.active.color}',
          activeBackground: '{stepper.step.title.active.color}',
        },
      },
    },
  },
  // Tabs
  tabs: {
    tablist: {
      border: {
        width: '0 0 3px 0',
        color: 'transparent',
      },
    },
    tab: {
      margin: '0 0 -3px 0',
      border: {
        width: '0 0 3px 0',
        color: 'transparent',
      },
      color: '{text.color}',
      hoverColor: '{primary.color}',
      hoverBorderColor: 'transparent',
    },
    active: {
      barHeight: '3px',
      barBottom: '-3px',
    },
    colorScheme: {
      light: {
        tablistBackground: '{surface.50}',
        tabpanelBackground: '{surface.50}',
        nav: {
          button: {
            color: '{primary.color}',
            hoverColor: '{primary.hover.color}',
            background: '{surface.50}',
            shadow: '0px 0px 10px 10px {surface.50}',
          },
        },
      },
    },
  },
  // Toolbar
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Overlay
  // --------------------------------------------------------------------------
  // ConfirmDialog
  // ConfirmPopup
  confirmpopup: {
    arrowOffset: 'calc({confirmpopupBorderRadius} * 2.5)',
  },
  // Dialog
  dialog: {
    title: {
      fontSize: '1.6rem',
      fontWeight: '600',
    },
    footerGap: '1rem',
  },
  // Drawer
  // DinamicDialog
  // Popover
  popover: {
    arrowOffset: 'calc({popoverBorderRadius} * 2)',
  },
  // Tooltip (options not working because of PrimeVue bug)
  tooltip: {
    maxWidth: '30rem',
    gutter: '0.5rem',
    colorScheme: {
      light: {
        color: '{text.color}',
        background: '{surface.50}',
      },
    },
  },
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // File
  // --------------------------------------------------------------------------
  // Upload
  fileupload: {
    headerPadding: '1rem 1rem 0.5rem 1rem',
    contentPadding: '0.5rem 1rem 1rem 1rem',
    css: ({ dt }) => `
      .p-fileupload-content {
        border-radius: ${dt('fileupload.border.radius')};
      }
    `,
  },
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Menu
  // --------------------------------------------------------------------------
  // Breadcrumb
  // ContextMenu
  // Dock
  // Menu
  // Menubar
  // MegaMenu
  // PanelMenu
  // TieredMenu
  tieredmenu: {
    itemPadding: '1rem 1rem',
    listGap: '0.2rem',
    submenuIconSize: '1.4rem',
  },
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Chart
  // --------------------------------------------------------------------------
  // Chart.js
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Messages
  // --------------------------------------------------------------------------
  // Message
  message: {
    text: {
      fontSize: 'inherit',
      smFontSize: '1.2rem',
      lgFontSize: '1.6rem',
      fontWeight: 'inherit',
    },
  },
  // Toast
  toast: {
    width: '30rem',
    contentPadding: '1.5rem',
    contentGap: '1.5rem',
    summary: {
      fontWeight: '700',
      fontSize: '1.6rem',
    },
    detail: {
      fontWeight: '400',
      fontSize: 'initial',
    },
    colorScheme: {
      light: {
        success: {
          color: '{text.color}',
          background: '{content.background}',
          borderColor: '{green.500}',
        },
        info: {
          color: '{text.color}',
          background: '{content.background}',
          borderColor: '{sky.500}',
        },
        warn: {
          color: '{text.color}',
          background: '{content.background}',
          borderColor: '{amber.500}',
        },
        error: {
          color: '{text.color}',
          background: '{content.background}',
          borderColor: '{red.400}',
        },
        secondary: {
          color: '{text.color}',
          background: '{content.background}',
          borderColor: '{gray.500}',
        },
        contrast: {
          color: '{primary.color}',
          detailColor: '{text.color}',
          background: '{content.background}',
          borderColor: '{primary.color}',
        },
      },
    },
  },
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Media
  // --------------------------------------------------------------------------
  // Carousel
  // Galleria
  // Image
  // ImageCompare
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Misc
  // --------------------------------------------------------------------------
  // Avatar
  // Badge
  badge: {
    fontSize: '1.2rem',
    fontWeight: '400',
    minWidth: '1.8rem',
    height: '1.8rem',
    padding: '0.5rem 0.5rem',
    borderRadius: '10rem',
    xl: {
      fontSize: '1.6rem',
      minWidth: '2.2rem',
      height: '2.2rem',
    },
    lg: {
      fontSize: '1.4rem',
      minWidth: '2rem',
      height: '2rem',
    },
    sm: {
      fontSize: '1rem',
      minWidth: '1.6rem',
      height: '1.6rem',
    },
    dotSize: '0.6rem',
    colorScheme: {
      light: {
        primaryBackground: '{surface.500}',
      },
    },
  },
  // BlockUI
  // Chip
  chip: {
    paddingX: '0.3rem',
    paddingY: '0.3rem',
    gap: '0',
    borderRadius: '10rem',
    iconSize: '2rem',
    remove: {
      iconSize: '2rem',
    },
    app: {
      fontSize: '1.2rem',
    },
    colorScheme: {
      light: {
        iconColor: '{surface.500}',
        removeIconColor: '{surface.500}',
      },
    },
    css: ({ dt }) => `
      .p-chip {
        font-size: ${dt('chip.app.fontSize')};
        .p-chip-label {
          padding-block: ${dt('chip.padding.y')};
          padding-inline: ${dt('chip.padding.x')};
        }
        .icon-close {
          min-width: fit-content;
          min-height: fit-content;
          color: ${dt('chip.remove.icon.color')};
        }
      }
    `,
  },
  // Fluid
  // Inplace
  // MeterGroup
  // ProgressBar
  // ProgressSpinner
  progressspinner: {
    colorScheme: {
      light: {
        root: {
          'color.1': '{primary.color}',
          'color.2': '{primary.color}',
          'color.3': '{primary.color}',
          'color.4': '{primary.color}',
        },
      },
    },
  },
  // ScrollTop
  // Skeleton
  // Tag
  // Terminal
  // --------------------------------------------------------------------------
}