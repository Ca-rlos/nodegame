// This is a temporary solution. Look away from the horrors in this file. Sheesh.

module.exports = {
    generateAvatar: function () { 
        const colors = ['#ff4000', '#ff8000', '#ffbf00', 
                        '#ffff00', '#bfff00', '#80ff00', 
                        '#40ff00', '#00ff00', '#00ff40', 
                        '#00ff80', '#00ffbf', '#00ffff', 
                        '#00bfff', '#0080ff', '#0040ff', 
                        '#0000ff', '#4000ff', '#8000ff', 
                        '#bf00ff', '#ff00ff', '#ff00bf', 
                        '#ff0080', '#ff0040', '#ff0000'];
        const bodySections = {
            skin: {map: [{X: '2', Y: '2'}, {X: '2', Y: '3'}, {X: '2', Y: '4'}, 
                   {X: '2', Y: '5'}, {X: '3', Y: '3'}, {X: '3', Y: '4'}, 
                   {X: '4', Y: '2'}, {X: '4', Y: '3'}, {X: '4', Y: '4'}, 
                   {X: '4', Y: '5'}, {X: '8', Y: '1'}, {X: '8', Y: '6'}]}, 
            eyes: {map: [{x: '3', Y: '2'}, {X: '3', Y: '5'}]}, 
            shirt: {map: [{X: '5', Y: '1'}, {X: '5', Y: '2'}, {X: '5', Y: '3'}, 
                    {X: '5', Y: '4'}, {X: '5', Y: '5'}, {X: '5', Y: '6'}, 
                    {X: '6', Y: '1'}, {X: '6', Y: '2'}, {X: '6', Y: '3'}, 
                    {X: '6', Y: '4'}, {X: '6', Y: '5'}, {X: '6', Y: '6'}, 
                    {X: '7', Y: '1'}, {X: '7', Y: '2'}, {X: '7', Y: '3'}, 
                    {X: '7', Y: '4'}, {X: '7', Y: '5'}, {X: '7', Y: '6'}]}, 
            pants: {map: [{X: '8', Y: '2'}, {X: '8', Y: '3'}, {X: '8', Y: '4'}, 
                    {X: '8', Y: '5'}, {X: '9', Y: '2'}, {X: '9', Y: '3'}, 
                    {X: '9', Y: '4'}, {X: '9', Y: '5'}, {X: '10', Y: '2'}, 
                    {X: '10', Y: '3'}, {X: '10', Y: '4'}, {X: '10', Y: '5'}, 
                    {X: '11', Y: '2'}, {X: '11', Y: '3'}, {X: '11', Y: '4'}, 
                    {X: '11', Y: '5'}, {X: '12', Y: '2'}, {X: '12', Y: '3'}, 
                    {X: '12', Y: '4'}, {X: '12', Y: '5'}]}, 
            shoes: {map: [{X: '13', Y: '2'}, {X: '13', Y: '3'}, {X: '13', Y: '4'}, 
                    {X: '13', Y: '5'}]}, 
            hair: {map: [{X: '1', Y: '2'}, {X: '1', Y: '3'}, {X: '1', Y: '4'}, 
                   {X: '1', Y: '5'}, {X: '2', Y: '1'}, {X: '2', Y: '6'}, 
                   {X: '3', Y: '1'}, {X: '3', Y: '6'}, {X: '4', Y: '1'}, 
                   {X: '4', Y: '6'}]}
        };
        Object.keys(bodySections).forEach(section => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            bodySections[section].color = randomColor;
        });
        return bodySections;
    },
};