import { RecipeDetail } from '@/types/entity';

export const recipeDetailSample: RecipeDetail = {
    id: 1,
    name: 'しらたき塩焼きそば',
    imageUrl: 'https://res.cloudinary.com/drf6p5cyv/image/upload/huftga6tcppne7md6q70.jpg',
    shelfLife: '冷蔵保存3日',
    calories: 100,
    category: { id: 1, name: '主食', icon: 'rice', color: 'orange' },
    ingredients: [
        { id: 2, name: 'しらたき', volume: '400g' },
        { id: 1, name: 'シーフードミックス', volume: '50g' },
        { id: 3, name: 'キャベツ', volume: '50g' },
        { id: 4, name: 'もやし', volume: '50g' }
    ],
    steps: [
        {
            id: 3,
            stepNumber: 1,
            text: 'しらたきを水洗いして耐熱容器に入れ、浸るくらいの水を加えて600Wで5分チンする。\n加熱後、水洗いして水気をよく切る。',
            seasonings: []
        },
        {
            id: 1,
            stepNumber: 2,
            text: 'キャベツをざく切りにする',
            seasonings: []
        },
        {
            id: 2,
            stepNumber: 3,
            text: 'フライパンにごま油を熱し、具材を入れて中火で炒める',
            seasonings: []
        },
        {
            id: 4,
            stepNumber: 4,
            text: '野菜がしんなりしてきたら、しらたきと調味料を加えてよく炒める',
            seasonings: [{
                id: 1,
                name: '塩',
                volume: '少々'
            }, {
                id: 2,
                name: 'にんにくチューブ',
                volume: '4cm'
            }, {
                id: 3,
                name: '鶏がらスープの素',
                volume: '大さじ1/2'
            }]
        }
    ]
}