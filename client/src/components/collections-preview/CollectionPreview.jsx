import CollectionItem from '../collection-item/CollectionItem';
import {
    CollectionPreviewStyle,
    CollectionPreviewTitleStyle,
    CollectionPreviewWrapStyle
} from "./CollectionPreview.styles";

const CollectionPreview = ({title, items}) => {
    return (
        <CollectionPreviewWrapStyle>
            <CollectionPreviewTitleStyle>{title}</CollectionPreviewTitleStyle>
            <CollectionPreviewStyle>
                {items.filter((item, index) => index < 4).map(({...itemProps}) => <CollectionItem
                    key={itemProps.id} {...itemProps}/>)}
            </CollectionPreviewStyle>
        </CollectionPreviewWrapStyle>
    );
};

export default CollectionPreview;
