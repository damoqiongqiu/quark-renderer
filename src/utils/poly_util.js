import smoothSpline from './smooth_spline';
import smoothBezier from './smooth_bezier';

export function buildPath(ctx, shape, closePath) {
    var points = shape.points;
    var smooth = shape.smooth;
    var i = 0; 
    var l = 0;
    if (points && points.length >= 2) {
        if (smooth && smooth !== 'spline') {
            var controlPoints = smoothBezier(
                points, smooth, closePath, shape.smoothConstraint
            );

            ctx.moveTo(points[0][0], points[0][1]);
            var len = points.length;
            for (i = 0; i < (closePath ? len : len - 1); i++) {
                var cp1 = controlPoints[i * 2];
                var cp2 = controlPoints[i * 2 + 1];
                var p = points[(i + 1) % len];
                ctx.bezierCurveTo(
                    cp1[0], cp1[1], cp2[0], cp2[1], p[0], p[1]
                );
            }
        }else {
            if (smooth === 'spline') {
                points = smoothSpline(points, closePath);
            }

            ctx.moveTo(points[0][0], points[0][1]);
            for (i = 1, l = points.length; i < l; i++) {
                ctx.lineTo(points[i][0], points[i][1]);
            }
        }

        closePath && ctx.closePath();
    }
}
