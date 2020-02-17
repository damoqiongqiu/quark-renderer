/**
 * Do not mount those modules on 'src/qrenderer' for better tree shaking.
 */
import * as qrUtil from './core/utils/data_structure_util';
import * as matrix from './core/utils/matrix';
import * as vector from './core/utils/vector';
import * as colorTool from './core/utils/color_util';
import * as pathTool from './core/utils/path_util';
import {parseSVG} from './svg/SVGParser';

export {default as Group} from './graphic/Group';
export {default as Path} from './graphic/Path';
export {default as Image} from './graphic/Image';
export {default as CompoundPath} from './graphic/CompoundPath';
export {default as Text} from './graphic/Text';
export {default as IncrementalDisplayable} from './graphic/IncrementalDisplayable';
export {default as Arc} from './graphic/shape/Arc';
export {default as BezierCurve} from './graphic/shape/BezierCurve';
export {default as Circle} from './graphic/shape/Circle';
export {default as Droplet} from './graphic/shape/Droplet';
export {default as Ellipse} from './graphic/shape/Ellipse';
export {default as Heart} from './graphic/shape/Heart';
export {default as Isogon} from './graphic/shape/Isogon';
export {default as Line} from './graphic/shape/Line';
export {default as Polygon} from './graphic/shape/Polygon';
export {default as Polyline} from './graphic/shape/Polyline';
export {default as Rect} from './graphic/shape/Rect';
export {default as Ring} from './graphic/shape/Ring';
export {default as Rose} from './graphic/shape/Rose';
export {default as Sector} from './graphic/shape/Sector';
export {default as Star} from './graphic/shape/Star';
export {default as Trochoid} from './graphic/shape/Trochoid';
export {default as LinearGradient} from './graphic/gradient/LinearGradient';
export {default as RadialGradient} from './graphic/gradient/RadialGradient';
export {default as Pattern} from './graphic/Pattern';
export {default as BoundingRect} from './graphic/transform/BoundingRect';
export {matrix};
export {vector};
export {colorTool as color};
export {pathTool as path};
export {qrUtil as util};
export {parseSVG};
