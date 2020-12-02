import * as express from 'express';
import { getAlbumsByUserId, addAlbum, deleteAlbum } from './controller';

const route = express.Router();

route.get('/', getAlbumsByUserId);
route.post('/', addAlbum);
route.delete('/:albumId', deleteAlbum);

export default route;
