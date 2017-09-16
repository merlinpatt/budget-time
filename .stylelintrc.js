module.exports = {
  extends: 'stylelint-config-standard',

  ignoreFiles: 'client/stylesheets/sitewide/milligram/*.scss',

  plugins: [
    'stylelint-order',
  ],

  rules: {
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignore: ['after-comment'],
      ignoreAtRules: ['else'],
    }],
    'number-leading-zero': 'never',
    'order/properties-order': [
      // Positioning
      {
        properties: [
          'position',
          'z-index',
          'top',
          'right',
          'bottom',
          'left',
        ],
      },
      // Display and Box Model
      {
        properties: [
          'display',
          'flex',
          'overflow',
          'box-sizing',
          'width',
          'max-width',
          'height',
          'max-height',
          'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
          'border', 'border-top', 'border-right', 'border-bottom', 'border-left', 'border-radius',
          'outline', 'outline-top', 'outline-right', 'outline-bottom', 'outline-left',
          'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
        ],
      },
      // Color
      {
        properties: [
          'background',
          'color',
          'opacity',
        ],
      },
      // Text
      {
        properties: [
          'font',
          'line-height',
          'text-align',
          'text-decoration',
          'text-transform',
        ],
      },
      // Other
      {
        properties: [
          'box-shadow',
          'cursor',
        ],
      },
      // Transitions and Animations
      {
        properties: [
          'transition',
          'animation',
        ],
      },
    ], // end of order/properties-order
  },
};
