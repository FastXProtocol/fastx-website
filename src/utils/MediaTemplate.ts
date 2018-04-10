import { css } from "styled-components";

const SIZES = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 400,
};

interface MediaTemplateType {
  giant: any;
  desktop: any;
  tablet: any;
  phone: any;
}

// iterate through the sizes and create a media template
const MediaTemplate = Object.keys(SIZES).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = SIZES[label] / 16;
    accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css.apply(null, args)}
    }
  `;
    return accumulator;
  },
  {});

export { MediaTemplate, MediaTemplateType };